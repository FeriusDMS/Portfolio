import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const zeroShaPattern = /^0+$/;

function runGit(args) {
  try {
    return execFileSync('git', args, {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    }).trim();
  } catch {
    return '';
  }
}

function resolveRange() {
  const target = process.env.PATCH_NOTES_TO?.trim() || 'HEAD';
  const source = process.env.PATCH_NOTES_FROM?.trim();

  if (source && !zeroShaPattern.test(source)) {
    return { from: source, to: target };
  }

  try {
    runGit(['rev-parse', '--verify', 'HEAD~1']);
    return { from: 'HEAD~1', to: target };
  } catch {
    return { from: target, to: target };
  }
}

function collectCommitData(range) {
  const format = '%h\t%s';
  const command = range.from === range.to
    ? ['log', '-1', `--format=${format}`, range.to]
    : ['log', `--format=${format}`, `${range.from}..${range.to}`];

  const output = runGit(command);

  if (!output) {
    return [];
  }

  return output
    .split('\n')
    .filter(Boolean)
    .map((line) => {
      const [hash, ...subjectParts] = line.split('\t');

      return {
        hash: hash || range.to.slice(0, 7),
        subject: subjectParts.join('\t').trim() || 'Mise à jour du portfolio',
      };
    });
}

function collectChangedFiles(range) {
  if (range.from === range.to) {
    return [];
  }

  const output = runGit([
    'diff',
    '--name-only',
    '--diff-filter=ACMR',
    range.from,
    range.to,
  ]);

  return output ? output.split('\n').filter(Boolean) : [];
}

function buildHighlightsFromCommits(commits) {
  const highlights = new Set();

  for (const commit of commits) {
    const subject = commit.subject.toUpperCase();

    if (subject.includes('FIX') || subject.includes('CORRECTIF')) {
      if (subject.includes('COMPIL')) {
        highlights.add('Correction d\'un problème de compilation du projet.');
      } else if (subject.includes('ERROR') || subject.includes('ERREUR')) {
        highlights.add('Correction d\'erreurs et stabilisation du code.');
      } else {
        highlights.add('Corrections et améliorations du code existant.');
      }
    } else if (subject.includes('FEAT') || subject.includes('FEATURE') || subject.includes('AJOUT')) {
      if (subject.includes('PATCH')) {
        highlights.add('Intégration du système automatique de patch notes.');
      } else if (subject.includes('BUTTON') || subject.includes('BOUTON')) {
        highlights.add('Ajout de nouveaux éléments d\'interface utilisateur.');
      } else {
        highlights.add('Nouvelles fonctionnalités et améliorations ajoutées.');
      }
    } else if (subject.includes('REFACTOR') || subject.includes('REFONTE')) {
      highlights.add('Restructuration et optimisation du code.');
    } else if (subject.includes('MERGE') || subject.includes('PULL')) {
      highlights.add('Intégration de modifications depuis les branches de développement.');
    } else {
      const shortSubject = commit.subject.split('(')[0].trim();
      if (shortSubject.length > 10) {
        highlights.add(shortSubject.charAt(0).toUpperCase() + shortSubject.slice(1) + '.');
      }
    }
  }

  return [...highlights].slice(0, 5);
}

function createPatchNotes(range, commits, files) {
  const generatedAt = new Date().toISOString();
  const generatedAtLabel = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date(generatedAt));

  const highlights = buildHighlightsFromCommits(commits);
  const commitCount = commits.length;
  const fileCount = files.length;

  return {
    title: 'Patch note automatique',
    generatedAt,
    generatedAtLabel,
    range: {
      from: range.from,
      to: range.to,
    },
    summary:
      commitCount === 0
        ? 'Aucune modification détectée pour ce déploiement.'
        : `${commitCount} commit(s) ont modifié ${fileCount} fichier(s).`,
    highlights: highlights.length > 0 ? highlights : ["Aucun détail spécifique n'a été détecté dans ce push."],
    commits,
    commitCount,
    fileCount,
  };
}

function createSourceFile(patchNotes) {
  return `/* eslint-disable */\nexport const patchNotes = ${JSON.stringify(patchNotes, null, 2)} as const;\n`;
}

const range = resolveRange();
const commits = collectCommitData(range);
const files = collectChangedFiles(range);
const patchNotes = createPatchNotes(range, commits, files);

const outputFile = resolve(
  process.cwd(),
  process.env.PATCH_NOTES_OUTPUT?.trim() || 'src/app/generated/patch-notes.generated.ts'
);

mkdirSync(dirname(outputFile), { recursive: true });
writeFileSync(outputFile, createSourceFile(patchNotes), 'utf8');

console.log(`Patch notes generated at ${outputFile}`);
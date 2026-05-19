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

function buildHighlights(files) {
  const highlights = new Set();

  for (const file of files) {
    const normalized = file.replace(/\\/g, '/');

    if (normalized.startsWith('.github/workflows/')) {
      highlights.add('Automatisation du déploiement et du build renforcée.');
      continue;
    }

    if (normalized.startsWith('src/app/generated/')) {
      highlights.add('Le patch note du site a été régénéré automatiquement.');
      continue;
    }

    if (normalized.startsWith('src/app/components/')) {
      highlights.add('Un ou plusieurs composants du portfolio ont été mis à jour.');
      continue;
    }

    if (normalized.startsWith('src/app/pages/')) {
      highlights.add('Une page du site a évolué pour afficher les nouvelles informations.');
      continue;
    }

    if (normalized.startsWith('src/app/services/')) {
      highlights.add('La logique métier et les services applicatifs ont été ajustés.');
      continue;
    }

    if (normalized.startsWith('src/assets/') || normalized.startsWith('public/')) {
      highlights.add('Des ressources visuelles ou statiques ont été actualisées.');
      continue;
    }

    if (normalized === 'package.json' || normalized === 'package-lock.json') {
      highlights.add('Les scripts ou dépendances du projet ont été mis à jour.');
      continue;
    }

    if (normalized.endsWith('.html') || normalized.endsWith('.scss') || normalized.endsWith('.ts')) {
      highlights.add("Des ajustements d'interface et de comportement ont été appliqués.");
      continue;
    }

    highlights.add('Modifications de code et de configuration appliquées au site.');
  }

  return [...highlights];
}

function createPatchNotes(range, commits, files) {
  const generatedAt = new Date().toISOString();
  const generatedAtLabel = new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'long',
    timeStyle: 'short',
  }).format(new Date(generatedAt));

  const highlights = buildHighlights(files);
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
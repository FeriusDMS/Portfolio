/* eslint-disable */
export const patchNotes = {
  title: 'Patch note automatique',
  generatedAt: '2026-05-19T00:00:00.000Z',
  generatedAtLabel: '19 mai 2026 à 00:00',
  range: {
    from: 'HEAD~1',
    to: 'HEAD',
  },
  summary: 'Le patch note sera régénéré automatiquement lors du prochain push sur main.',
  highlights: [
    "Intégration d'un bloc patch note affiché directement sur le site.",
    'Automatisation prévue via GitHub Actions au moment du push sur main.',
  ],
  commits: [
    {
      hash: 'local',
      subject: 'Patch note de secours pour le développement local',
    },
  ],
  commitCount: 1,
  fileCount: 0,
} as const;
/* eslint-disable */
export const patchNotes = {
  title: { fr: 'Patch note automatique', en: 'Automatic patch note' },
  generatedAt: '2026-05-19T00:00:00.000Z',
  range: {
    from: 'HEAD~1',
    to: 'HEAD',
  },
  summary: {
    fr: 'Le patch note sera régénéré automatiquement lors du prochain push sur main.',
    en: 'The patch note will be regenerated automatically on the next push to main.',
  },
  highlights: [
    {
      fr: "Intégration d'un bloc patch note affiché directement sur le site.",
      en: 'Integration of a patch notes block displayed directly on the website.',
    },
    {
      fr: 'Automatisation prévue via GitHub Actions au moment du push sur main.',
      en: 'Automation planned through GitHub Actions when pushing to main.',
    },
  ],
  commits: [
    {
      hash: 'local',
      subject: {
        fr: 'Patch note de secours pour le développement local',
        en: 'Fallback patch notes for local development',
      },
    },
  ],
  commitCount: 1,
  fileCount: 0,
} as const;
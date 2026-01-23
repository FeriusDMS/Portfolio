import { Injectable } from '@angular/core';

export interface PatchNote {
  version: string;
  date: string;
  changes: {
    fr: string[];
    en: string[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  private currentVersion = '1.5.0';

  private patchNotes: PatchNote[] = [
    {
      version: '1.5.0',
      date: '2026-01-23',
      changes: {
        fr: [
          "🆕 Ajout d'un système de patch notes",
          "🆕 Ajout d'un système de versioning",
          "🆕 Ajout d'une nouvelle connexion avec Discord",
        ],
        en: [
          '🆕 Added patch notes system',
          '🆕 Added versioning system',
          '🆕 Added new Discord connection',
        ],
      },
    },
  ];

  getCurrentVersion(): string {
    return this.currentVersion;
  }

  getAllPatchNotes(): PatchNote[] {
    return this.patchNotes;
  }

  getLatestPatchNote(): PatchNote {
    return this.patchNotes[0];
  }
}

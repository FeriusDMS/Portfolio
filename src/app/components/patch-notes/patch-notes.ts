import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { VersionService, PatchNote } from '../../services/version.service';

@Component({
  selector: 'app-patch-notes',
  imports: [CommonModule],
  templateUrl: './patch-notes.html',
  styleUrl: './patch-notes.scss',
})
export class PatchNotesComponent {
  showModal = signal(false);
  patchNotes: PatchNote[] = [];
  currentVersion: string = '';

  constructor(public translate: TranslationService, private versionService: VersionService) {
    this.currentVersion = this.versionService.getCurrentVersion();
    this.patchNotes = this.versionService.getAllPatchNotes();
  }

  openModal() {
    this.showModal.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.showModal.set(false);
    document.body.style.overflow = '';
  }
}

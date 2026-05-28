import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { patchNotes } from '../../generated/patch-notes.generated';
import { PatchNotesModalService } from '../../services/patch-notes-modal.service';
import { TranslationService } from '../../services/translation.service';

type LocalizedText = {
  fr: string;
  en: string;
};

type TranslatableText = string | LocalizedText;

@Component({
  selector: 'app-patch-notes',
  imports: [CommonModule],
  templateUrl: './patch-notes.html',
  styleUrl: './patch-notes.scss',
})
export class PatchNotes {
  readonly patchNotes = patchNotes;

  constructor(
    public translate: TranslationService,
    public modal: PatchNotesModalService
  ) {}

  t(value: TranslatableText) {
    if (typeof value === 'string') {
      return value;
    }

    return value[this.translate.currentLang()];
  }

  formatGeneratedAt() {
    const locale = this.translate.currentLang() === 'fr' ? 'fr-FR' : 'en-GB';
    return new Intl.DateTimeFormat(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(new Date(this.patchNotes.generatedAt));
  }

  closeModal() {
    this.modal.close();
  }
}

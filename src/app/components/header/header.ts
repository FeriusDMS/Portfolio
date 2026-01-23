import { Component, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';
import { PatchNotesComponent } from '../patch-notes/patch-notes';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule, PatchNotesComponent],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @ViewChild(PatchNotesComponent) patchNotesComponent!: PatchNotesComponent;

  menuActive = signal(false);
  showCopyToast = signal(false);
  showShareModal = signal(false);

  constructor(public translate: TranslationService) {}

  toggleMenu() {
    this.menuActive.set(!this.menuActive());
  }

  closeMenu() {
    this.menuActive.set(false);
  }

  toggleLanguage() {
    const newLang = this.translate.currentLang() === 'fr' ? 'en' : 'fr';
    this.translate.setLanguage(newLang);
    this.closeMenu();
  }

  openPatchNotes() {
    this.patchNotesComponent.openModal();
    this.closeMenu();
  }

  shareWebsite() {
    this.showShareModal.set(true);
    this.closeMenu();
  }

  closeShareModal() {
    this.showShareModal.set(false);
  }

  async copyLink() {
    const url = window.location.href;

    try {
      await navigator.clipboard.writeText(url);
      this.showCopyToast.set(true);
      this.closeShareModal();

      setTimeout(() => {
        this.showCopyToast.set(false);
      }, 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  }

  shareOn(platform: string) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Portfolio - Andrea Mancion');
    const text = encodeURIComponent('Découvrez mon portfolio !');

    let shareUrl = '';

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${text}%20${url}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${title}&body=${text}%20${url}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
      this.closeShareModal();
    }
  }
}

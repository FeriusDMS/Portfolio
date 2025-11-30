import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuActive = signal(false);
  showCopyToast = signal(false);

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

  async shareWebsite() {
    const url = window.location.origin + window.location.pathname;
    
    try {
      await navigator.clipboard.writeText(url);
      this.showCopyToast.set(true);
      this.closeMenu();
      
      setTimeout(() => {
        this.showCopyToast.set(false);
      }, 2000);
    } catch (err) {
      console.error('Erreur lors de la copie:', err);
    }
  }
}

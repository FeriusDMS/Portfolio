import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { PatchNotesModalService } from '../../services/patch-notes-modal.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = new Date().getFullYear();
  
  constructor(
    public translate: TranslationService,
    private router: Router,
    private patchNotesModal: PatchNotesModalService
  ) {}

  scrollToTop(event?: Event) {
    if (event) {
      event.preventDefault();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateHome(event: Event) {
    event.preventDefault();
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  openPatchNotes(event: Event) {
    event.preventDefault();
    this.patchNotesModal.open();
  }
}

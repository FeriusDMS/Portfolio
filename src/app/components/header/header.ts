import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  menuActive = signal(false);

  toggleMenu() {
    this.menuActive.set(!this.menuActive());
  }

  closeMenu() {
    this.menuActive.set(false);
  }
}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { PatchNotes } from './components/patch-notes/patch-notes';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Footer,
    PatchNotes
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}

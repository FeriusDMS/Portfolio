import { Component } from '@angular/core';
import { About } from '../../components/about/about';

@Component({
  selector: 'app-about-page',
  imports: [About],
  templateUrl: './about-page.html',
  styleUrl: './about-page.scss',
})
export class AboutPage {}

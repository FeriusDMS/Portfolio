import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-about-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './about-detail.html',
  styleUrl: './about-detail.scss',
})
export class AboutDetail {
  constructor(public translate: TranslationService) {}
}

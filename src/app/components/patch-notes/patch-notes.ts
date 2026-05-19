import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { patchNotes } from '../../generated/patch-notes.generated';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-patch-notes',
  imports: [CommonModule],
  templateUrl: './patch-notes.html',
  styleUrl: './patch-notes.scss',
})
export class PatchNotes {
  readonly patchNotes = patchNotes;

  constructor(public translate: TranslationService) {}

import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environment/environment';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  submitted = false;
  error = false;
  sending = false;

  constructor(
    public translate: TranslationService,
    private cdr: ChangeDetectorRef
  ) {
    // Initialiser EmailJS avec ta Public Key
    emailjs.init(environment.PUBLIC_KEY as string);
  }

  async onSubmit() {
    this.sending = true;
    this.submitted = false;
    this.error = false;
    
    try {
      const serviceID = environment.SERVICE_ID as string;
      const templateID = environment.TEMPLATE_ID as string;

      // Envoyer l'email
      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject,
          message: this.formData.message
        }
      );

      // Succès
      this.sending = false;
      this.submitted = true;
      this.error = false;
      this.cdr.detectChanges(); // Force la détection des changements
      console.log('Email envoyé avec succès! submitted =', this.submitted);

      // Reset après 3 secondes
      setTimeout(() => {
        this.submitted = false;
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      }, 3000);
    } catch (err) {
      console.error('Erreur lors de l\'envoi:', err);
      this.sending = false;
      this.error = true;
      this.cdr.detectChanges(); // Force la détection des changements
      setTimeout(() => {
        this.error = false;
      }, 3000);
    }
  }
}

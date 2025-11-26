import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

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

  onSubmit() {
    // Ici, tu pourrais ajouter l'envoi réel du formulaire
    console.log('Form submitted:', this.formData);
    this.submitted = true;
    
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
  }
}

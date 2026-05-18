import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {
  sent = false;
  form = { name: '', email: '', subject: '', message: '' };

  contactLinks = [
    { icon: '✉️', type: 'EMAIL',     label: 'leaderabdallah20@gmail.com', href: 'mailto:leaderabdallah20@gmail.com', external: false },
    { icon: '💼', type: 'LINKEDIN',  label: 'linkedin.com/in/abdallah-mohamed', href: 'https://www.linkedin.com/in/abdallah-mohamed-5814772a5', external: true },
    { icon: '⌥',  type: 'GITHUB',   label: 'github.com/Abdallah11Mohamed', href: 'https://github.com/Abdallah11Mohamed', external: true },
    { icon: '💬', type: 'WHATSAPP', label: '+20 127 232 0465', href: 'https://wa.me/201272320465', external: true },
  ];

  sendMessage() {
    if (!this.form.name || !this.form.email) return;
    this.sent = true;
    setTimeout(() => { this.sent = false; this.form = { name:'', email:'', subject:'', message:'' }; }, 3500);
  }
}

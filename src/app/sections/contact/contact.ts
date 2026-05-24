import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  contactLinks = [

    {
      icon: '📧',
      type: 'EMAIL',
      label: 'leaderabdallah20@gmail.com',
      href: 'mailto:leaderabdallah20@gmail.com',
      external: false
    },

    {
      icon: '💬',
      type: 'WHATSAPP',
      label: '+20 127 232 0465',
      href: 'https://wa.me/201272320465',
      external: true
    },

    {
      icon: '💼',
      type: 'LINKEDIN',
      label: 'linkedin.com/in/abdallah-mohamed',
      href: 'https://www.linkedin.com/in/abdallah-mohamed-5814772a5',
      external: true
    },

    {
      icon: '💻',
      type: 'GITHUB',
      label: 'github.com/Abdallah11Mohamed',
      href: 'https://github.com/Abdallah11Mohamed',
      external: true
    },

    {
      icon: '📘',
      type: 'FACEBOOK',
      label: 'Facebook Profile',
      href: 'https://www.facebook.com/share/1H8jc56usV/',
      external: true
    }

  ];

}
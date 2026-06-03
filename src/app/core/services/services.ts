import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {

  services = [
    {
      icon: 'fa-solid fa-code',
      title: 'Angular Development',
      description:
        'Building scalable Angular applications using standalone components and modern architecture.'
    },

    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Authentication Systems',
      description:
        'Implementing JWT authentication, route guards and HTTP interceptors.'
    },

    {
      icon: 'fa-solid fa-plug',
      title: 'REST API Integration',
      description:
        'Connecting frontend applications with backend services and external APIs.'
    },

    {
      icon: 'fa-solid fa-diagram-project',
      title: 'State Management',
      description:
        'Managing application state using RxJS, BehaviorSubjects and Angular Signals.'
    },

    {
      icon: 'fa-solid fa-mobile-screen-button',
      title: 'Responsive Design',
      description:
        'Creating responsive user interfaces for desktop, tablet and mobile devices.'
    },

    {
      icon: 'fa-solid fa-bolt',
      title: 'Performance Optimization',
      description:
        'Improving application performance using lazy loading and reusable components.'
    }
  ];

}
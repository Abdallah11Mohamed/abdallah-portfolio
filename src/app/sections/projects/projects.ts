import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      title:    'Online Exam System',
      emoji:    '📝',
      featured: true,
      thumbBg:  'linear-gradient(135deg, #0e1422, #1a0a12)',
      desc:     'Full-featured examination platform with JWT authentication, HTTP interceptors, route guards, and reactive forms. Dynamic multi-type exam rendering with real-time validation.',
      features: ['JWT Auth', 'Route Guards', 'Interceptors', 'Reactive Forms'],
      stack:    ['Angular v21', 'TypeScript', 'RxJS', 'Bootstrap'],
      github:   'https://github.com/Abdallah11Mohamed/onlineExam',
      live:     'https://online-exam-mu-gray.vercel.app/'
    },
    {
      title:    'E-Commerce Platform',
      emoji:    '🛍️',
      featured: true,
      thumbBg:  'linear-gradient(135deg, #0a0e1a, #0a1628)',
      desc:     'Modern e-commerce app with product catalog, cart management, advanced search & filtering, and lazy-loaded standalone components using RxJS BehaviorSubjects.',
      features: ['Cart System', 'Search & Filter', 'Lazy Loading', 'Standalone Components'],
      stack:    ['Angular v21', 'TypeScript', 'RxJS', 'Bootstrap'],
      github:   'https://github.com/Abdallah11Mohamed/ecommerceProject',
      live:     'https://ecommerce-project-ia5h.vercel.app/'
    },
    {
      title:    'Social Media App',
      emoji:    '💬',
      featured: false,
      thumbBg:  'linear-gradient(135deg, #0e0e22, #0a0a18)',
      desc:     'Social platform with JWT authentication, full CRUD operations for posts and comments, optimistic UI updates via RxJS streams, and responsive layouts.',
      features: ['JWT Auth', 'CRUD Ops', 'Posts & Comments', 'Responsive'],
      stack:    ['Angular v21', 'TypeScript', 'RxJS', 'REST APIs'],
      github:   'https://github.com/Abdallah11Mohamed/social-app',
      live:     null
    },
    {
      title:    'QuickStay Hotel Booking',
      emoji:    '🏨',
      featured: false,
      thumbBg:  'linear-gradient(135deg, #0a1a0e, #091612)',
      desc:     'Angular frontend for a hotel booking platform with clean component architecture, API integration, booking flows, and separation of concerns between UI and service layers.',
      features: ['Booking Flow', 'API Integration', 'Clean Arch'],
      stack:    ['Angular v21', 'TypeScript', 'Bootstrap'],
      github:   'https://github.com/Abdallah11Mohamed/QuickStay-FullStack',
      live:     null
    },
    {
      title:    'Yummy – Recipe App',
      emoji:    '🍕',
      featured: false,
      thumbBg:  'linear-gradient(135deg, #1a120a, #180e08)',
      desc:     'Food recipe discovery app consuming external REST APIs with dynamic search, reusable card components, and fully responsive grid layouts.',
      features: ['External APIs', 'Dynamic Search', 'Responsive Grid'],
      stack:    ['Angular v21', 'Bootstrap', 'REST APIs'],
      github:   'https://github.com/Abdallah11Mohamed/yummy',
      live:     null
    }
  ];
}

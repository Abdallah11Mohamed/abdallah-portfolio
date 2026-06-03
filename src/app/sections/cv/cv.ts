import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.scss'
})
export class Cv {

  angularSkills = [
    'Angular',
    'TypeScript',
    'RxJS',
    'Signals',
    'Reactive Forms',
    'REST APIs',
    'JWT Auth',
    'HTML5',
    'CSS3',
    'SCSS',
    'Bootstrap',
    'Tailwind CSS',
    'Git',
    'GitHub',
    'Postman',
    'Figma'
  ];

  cvProjects = [

    {
      name: 'Online Exam System',
      stack: 'Angular v21 · TypeScript · RxJS · Bootstrap',
      github: 'https://github.com/Abdallah11Mohamed/onlineExam',
      live: 'https://online-exam-mu-gray.vercel.app/',
      points: [
        'Engineered full JWT auth flow with HTTP interceptors and route guards',
        'Implemented reactive forms with real-time validation and dynamic question rendering',
        'Integrated REST APIs via Angular services and RxJS operators'
      ]
    },

    {
      name: 'E-Commerce Platform',
      stack: 'Angular v21 · TypeScript · RxJS · Bootstrap',
      github: 'https://github.com/Abdallah11Mohamed/ecommerceProject',
      live: 'https://ecommerce-project-ia5h.vercel.app/',
      points: [
        'Developed modular product catalog with search, filtering, and cart functionality',
        'Architected reusable standalone components',
        'Implemented lazy-loaded feature modules improving performance'
      ]
    },

    {
      name: 'Social Media App',
      stack: 'Angular v21 · TypeScript · RxJS',
      github: 'https://github.com/Abdallah11Mohamed/social-app',
      live: 'https://social-app-two-phi.vercel.app/',
      points: [
        'Full CRUD operations for posts and comments',
        'JWT-based authentication with Angular interceptors',
        'Responsive user experience and reusable components'
      ]
    },

    {
      name: 'Yummy Recipe App',
      stack: 'HTML5 · CSS3 · JavaScript · Bootstrap',
      github: 'https://github.com/Abdallah11Mohamed/yummy',
      live: 'https://yummy-weld.vercel.app/',
      points: [
        'Recipe discovery application powered by external APIs',
        'Implemented search, category filtering, and responsive layouts',
        'Built using Vanilla JavaScript and Bootstrap'
      ]
    }

  ];

}
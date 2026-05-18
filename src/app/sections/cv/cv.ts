import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cv',
  imports: [CommonModule],
  templateUrl: './cv.html',
  styleUrl: './cv.scss'
})
export class Cv {
  angularSkills = ['Angular v21', 'TypeScript', 'RxJS', 'Signals', 'Route Guards', 'Interceptors', 'Reactive Forms', 'Lazy Loading', 'JWT Auth', 'REST APIs', 'Standalone Components', 'CRUD'];
  tools = ['Git', 'GitHub', 'Postman', 'Swagger', 'VS Code', 'Figma'];

  cvProjects = [
    {
      name:   'Online Exam System',
      stack:  'Angular v21 · TypeScript · RxJS · Bootstrap',
      github: 'https://github.com/Abdallah11Mohamed/onlineExam',
      points: [
        'Engineered full JWT auth flow with HTTP interceptors and route guards',
        'Implemented reactive forms with real-time validation and dynamic question rendering',
        'Integrated REST APIs via Angular services and RxJS operators (switchMap, catchError)',
      ]
    },
    {
      name:   'E-Commerce Platform',
      stack:  'Angular v21 · TypeScript · RxJS · Bootstrap',
      github: 'https://github.com/Abdallah11Mohamed/ecommerceProject',
      points: [
        'Developed modular product catalog with search, filtering, and cart via RxJS BehaviorSubjects',
        'Architected reusable standalone components reducing code duplication significantly',
        'Implemented lazy-loaded feature modules improving initial load performance',
      ]
    },
    {
      name:   'Social Media App',
      stack:  'Angular v21 · TypeScript · RxJS',
      github: 'https://github.com/Abdallah11Mohamed/social-app',
      points: [
        'Full CRUD operations for posts and comments with optimistic UI updates',
        'JWT-based authentication with token refresh logic via Angular interceptors',
      ]
    },
    {
      name:   'QuickStay Hotel Booking',
      stack:  'Angular v21 · TypeScript · Bootstrap',
      github: 'https://github.com/Abdallah11Mohamed/QuickStay-FullStack',
      points: [
        'Angular frontend for full-stack hotel booking platform with API integration',
      ]
    },
  ];
}

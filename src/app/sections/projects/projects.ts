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
      title: 'Online Exam System',

      desc:
        'Angular-based online examination platform with authentication, timed exams, route guards, reactive forms, and responsive dashboards.',

      image: 'assets/projects/exam-project.png',

      stack: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Bootstrap'
      ],

      github:
        'https://github.com/Abdallah11Mohamed/onlineExam',

      live:
        'https://online-exam-mu-gray.vercel.app/'
    },

    {
      title: 'E-Commerce Platform',

      desc:
        'Modern e-commerce application with product browsing, filtering, cart management, and responsive shopping experience.',

      image: 'assets/projects/ecommerce-project.png',

      stack: [
        'Angular',
        'TypeScript',
        'RxJS',
        'REST APIs'
      ],

      github:
        'https://github.com/Abdallah11Mohamed/ecommerceProject',

      live:
        'https://ecommerce-project-ia5h.vercel.app/'
    },

    {
      title: 'Social Media App',

      desc:
        'Social platform featuring authentication, posts, comments, CRUD operations, and responsive UI with API integration.',

      image: 'assets/projects/social-project.png',

      stack: [
        'Angular',
        'TypeScript',
        'RxJS',
        'REST APIs'
      ],

      github:
        'https://github.com/Abdallah11Mohamed/social-app',

      live:
        null
    },

    {
      title: 'QuickStay Hotel Booking',

      desc:
        'Hotel booking frontend focused on clean UI, booking flows, API integration, and responsive user experience.',

      image: 'assets/projects/hotel-project.png',

      stack: [
        'Angular',
        'TypeScript',
        'Bootstrap'
      ],

      github:
        'https://github.com/Abdallah11Mohamed/QuickStay-FullStack',

      live:
        null
    },

    {
      title: 'Yummy Recipe App',

      desc:
        'Recipe discovery application consuming external APIs with dynamic search, reusable components, and responsive layouts.',

      image: 'assets/projects/yummy-project.png',

      stack: [
        'Angular',
        'Bootstrap',
        'REST APIs'
      ],

      github:
        'https://github.com/Abdallah11Mohamed/yummy',

      live:
        null
    }

  ];

}
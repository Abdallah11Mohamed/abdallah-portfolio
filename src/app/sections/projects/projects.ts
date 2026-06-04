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
    desc: 'Full online examination platform featuring authentication, timed exams, progress tracking, dynamic questions, and responsive dashboards.',
    image: '/onlineExam.png',
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    github: 'https://github.com/Abdallah11Mohamed/onlineExam',
    live: 'https://online-exam-mu-gray.vercel.app/'
  },

  {
    title: 'E-Commerce Platform',
    desc: 'Modern e-commerce application with product catalog, advanced filtering, cart management, and seamless shopping experience.',
    image: '/ecommerce.png',
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    github: 'https://github.com/Abdallah11Mohamed/ecommerceProject',
    live: 'https://ecommerce-project-ia5h.vercel.app/'
  },

  {
    title: 'Social Media App',
    desc: 'Social networking platform supporting authentication, posts, comments, CRUD operations, and responsive user interactions.',
    image: '/socialApp.png',
    stack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs'],
    github: 'https://github.com/Abdallah11Mohamed/social-app',
    live: "https://social-app-two-phi.vercel.app/"
  },

  {
    title: 'Yummy Recipe App',
    desc: 'Recipe discovery application powered by external APIs with dynamic search, categories, and responsive layouts.',
    image: '/yummy.png',
    stack: ['html', 'css', 'js',"bootstrap"],
    github: 'https://github.com/Abdallah11Mohamed/yummy',
    live: "https://yummy-weld.vercel.app/"
  }

];

}
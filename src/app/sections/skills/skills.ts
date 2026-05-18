import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  categories = [
    {
      icon: '🅰️',
      title: 'Angular Ecosystem',
      skills: ['Angular v21', 'TypeScript', 'RxJS', 'Signals', 'Route Guards', 'Interceptors', 'Reactive Forms', 'Lazy Loading', 'Standalone Components', 'REST API Integration', 'JWT Auth', 'CRUD Operations']
    },
    {
      icon: '🌐',
      title: 'Frontend Core',
      skills: ['HTML5', 'CSS3', 'JavaScript ES6+', 'SCSS / SASS', 'Bootstrap 5', 'Tailwind CSS', 'Responsive Design']
    },
    {
      icon: '🛠️',
      title: 'Tools & Workflow',
      skills: ['Git', 'GitHub', 'Postman', 'Swagger', 'Figma', 'VS Code']
    }
  ];
}

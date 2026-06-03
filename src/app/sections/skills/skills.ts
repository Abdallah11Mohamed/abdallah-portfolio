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
      title: 'Frontend',
      icon: '💻',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3',
        'SCSS',
        'Bootstrap',
        'Tailwind CSS'
      ]
    },

    {
      title: 'Angular Ecosystem',
      icon: '⚡',
      skills: [
        'RxJS',
        'Signals',
        'Reactive Forms',
        'Route Guards',
        'Interceptors',
        'Lazy Loading',
        'NgRx'
      ]
    },

    {
      title: 'Tools',
      icon: '🛠️',
      skills: [
        'Git',
        'GitHub',
        'Postman',
        'Swagger',
        'Figma',
        'VS Code',
        
      ]
    },

    {
      title: 'Methodologies',
      icon: '📋',
      skills: [
        'Agile',
        'Scrum'
      ]
    }
  ];

}
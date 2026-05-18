import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  stackTags = ['Angular v21', 'TypeScript', 'RxJS', 'Signals', 'Tailwind CSS', 'REST APIs', 'JWT Auth'];
}

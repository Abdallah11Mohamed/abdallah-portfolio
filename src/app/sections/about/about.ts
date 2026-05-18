import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  stats = [
    { value: '5+',   label: 'Projects Built' },
    { value: 'v21',  label: 'Angular Version' },
    { value: '2025', label: 'CS Graduate'     },
    { value: '∞',    label: 'Learning Mode'   },
  ];
}

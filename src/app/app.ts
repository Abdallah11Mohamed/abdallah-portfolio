import { Component, OnInit } from '@angular/core';
import { Navbar    } from './core/navbar/navbar';
import { Hero      } from './sections/hero/hero';
import { About     } from './sections/about/about';
import { Skills    } from './sections/skills/skills';
import { Projects  } from './sections/projects/projects';
import { Cv        } from './sections/cv/cv';
import { Contact   } from './sections/contact/contact';
import { Footer    } from './sections/footer/footer';
import AOS from 'aos';
import { Services } from "./core/services/services";

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, Skills, Projects, Cv, Contact, Footer, Services],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit() {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
      offset: 60,
    });
  }
}

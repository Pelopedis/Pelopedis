import { Component, OnInit } from '@angular/core';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import Typed from 'typed.js';
import { CvComponent } from '../cv/cv.component';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [
    CurriculumVitaeComponent,
    AboutComponent,
    ProjectsComponent,
    ReferencesComponent,
    SkillsComponent,
    ContactComponent,
    TabMenuModule,]
})
export class LandingPageComponent implements OnInit {
  title = 'Welcome to Dev Mappouras Website';
  items = [
    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
    {label: 'My CV', icon: 'pi pi-fw pi-info', routerLink: '/cv'},
    {label: 'My Blog', icon: 'pi pi-fw pi-cog', routerLink: '/blog'},
    {label: 'Contact Me', icon: 'pi pi-fw pi-envelope', routerLink: '/contact'}
  ];

  constructor() { }

  ngOnInit() {
    var options = {
      strings: ['','Full-Stack Developer'],
      typeSpeed: 110,
      backSpeed: 80,
      loop: true,
    };
    
    var typed = new Typed('.typed', options);
    typed.reset(true)
  }

}

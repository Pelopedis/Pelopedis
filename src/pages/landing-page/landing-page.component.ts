import { Component, OnInit } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HttpClient } from '@angular/common/http';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [
    HomeComponent,
    CurriculumVitaeComponent,
    AboutComponent,
    ProjectsComponent,
    ReferencesComponent,
    SkillsComponent,
    ContactComponent]
})
export class LandingPageComponent implements OnInit {
  title = 'Welcome to Dev Mappouras Website';

  constructor() { }

  ngOnInit() {
  }

}

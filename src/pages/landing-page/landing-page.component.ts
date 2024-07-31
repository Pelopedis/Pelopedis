import { Component } from '@angular/core';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuComponent } from '../shared-components/menu/menu.component';
import { WelcomeMessageComponent } from './welcome-message/welcome-message.component';
import { FooterComponent } from '../shared-components/footer/footer.component';

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
    TabMenuModule,
    MenuComponent,
    WelcomeMessageComponent,
    FooterComponent]
})
export class LandingPageComponent {  }
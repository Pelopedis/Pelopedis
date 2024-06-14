import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContactComponent } from '../landing-page/contact/contact.component';
import { WelcomeMessageComponent } from '../landing-page/welcome-message/welcome-message.component';
import { MenuComponent } from '../shared-components/menu/menu.component';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css'],
  standalone: true,
  imports: [
    ContactComponent,
    TabMenuModule,
    MenuComponent,
    WelcomeMessageComponent]
})
export class ContactMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}

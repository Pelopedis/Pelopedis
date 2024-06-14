import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContactComponent } from '../landing-page/contact/contact.component';
import { WelcomeMessageComponent } from '../landing-page/welcome-message/welcome-message.component';
import { MenuComponent } from '../shared-components/menu/menu.component';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  standalone: true,
  imports: [
    ContactComponent,
    TabMenuModule,
    MenuComponent,
    WelcomeMessageComponent]
})
export class BlogComponent implements OnInit {
  title: string = 'My Blog';
  subtitle: string = 'Welcome to my blog!';

  posts = [
    {
      title: 'First Post',
      date: 'June 14, 2024',
      content: 'This is the content of the first post. It\'s a short paragraph to show how content might look.'
    },
    {
      title: 'Second Post',
      date: 'June 15, 2024',
      content: 'This is the content of the second post. It\'s another short paragraph to show more content.'
    }
  ];

  constructor() { }

  ngOnInit() {}
}

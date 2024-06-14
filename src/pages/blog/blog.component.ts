import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContactComponent } from '../landing-page/contact/contact.component';
import { WelcomeMessageComponent } from '../landing-page/welcome-message/welcome-message.component';
import { MenuComponent } from '../shared-components/menu/menu.component';
import { BlogService } from '../../services/blog.service';

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
  posts: any[] = [];
  title: string = 'My Blog';
  subtitle: string = 'Welcome to my blog!';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getPosts().subscribe((data: any[]) => {
      this.posts = data;
    });
  }
}

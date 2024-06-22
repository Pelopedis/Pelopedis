import { Component, OnInit } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { ContactComponent } from '../landing-page/contact/contact.component';
import { WelcomeMessageComponent } from '../landing-page/welcome-message/welcome-message.component';
import { MenuComponent } from '../shared-components/menu/menu.component';
import { DataApiService } from '../../services/data-api.service';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  standalone: true,
  imports: [
    ContactComponent,
    TabMenuModule,
    MenuComponent,
    WelcomeMessageComponent,
    HighlightModule,
    SafeHtmlPipe],
    providers: [
      {
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
          fullLibraryLoader: () => import('highlight.js')
        }
      }
    ]
})
export class BlogComponent implements OnInit {
  posts: any;
  title: string = 'My Blog';
  subtitle: string = 'Welcome to my blog!';

  constructor(
    public dataApi: DataApiService,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.loadData();

  }

  private async loadData() {
    this.posts = await this.dataApi.getPosts();
  }
}
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    TabMenuModule
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent { 
  
  showMenu: boolean = true;
  isMobile: boolean = false;

  items = [
    {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
    {label: 'My CV', icon: 'pi pi-fw pi-info', routerLink: '/cv'},
    {label: 'My Blog', icon: 'pi pi-fw pi-cog', routerLink: '/blog'},
    {label: 'Contact Me', icon: 'pi pi-fw pi-envelope', routerLink: '/contact'}
  ];

  constructor() { 
    this.checkScreenWidth();
    window.addEventListener('resize', () => {
      this.checkScreenWidth();
    });
  }

  checkScreenWidth() {
    this.isMobile = window.innerWidth <= 768; // Adjust breakpoint as needed
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}

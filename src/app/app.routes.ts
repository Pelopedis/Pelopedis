import { ContactMeComponent } from './../pages/contact-me/contact-me.component';
import { CvComponent } from './../pages/cv/cv.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('../pages/landing-page/landing-page.component').then(c => c.LandingPageComponent)
    },
    {
        path: 'cv',
        loadComponent: (): any => import('../pages/cv/cv.component').then (c => c.CvComponent)
    },
    {
        path: 'contact',
        loadComponent: (): any => import('../pages/contact-me/contact-me.component').then (c => c.ContactMeComponent)
    },
    {
        path: 'blog',
        loadComponent: (): any => import('../pages/blog/blog.component').then (c => c.BlogComponent)
    }
];
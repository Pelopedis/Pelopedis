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
    }
];
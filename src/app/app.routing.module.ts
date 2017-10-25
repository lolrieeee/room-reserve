//vendor imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

const routes:Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: '**',
        redirectTo: 'landing',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [ // we import other modules here for THIS (OUR) module to use!
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }

export const routedComponents = [
    LandingComponent,
    DashboardComponent,
    AboutComponent
];

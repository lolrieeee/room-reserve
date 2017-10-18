import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import RoomsComponent from './rooms/rooms.component';

import { LoginGuardService } from './services/login-guard.service';
import { CanDeactivateService } from './services/can-deactivate-guard.service';

const routes:Routes = [
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
        path: 'rooms',
        component: RoomsComponent
    },
    {
        path: 'rooms/:id',
        component: RoomsComponent,
        canActivate: [ LoginGuardService ],
        canDeactivate: [ CanDeactivateService ]
    },
    {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full'
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
    ],
    providers: [
        LoginGuardService,
        CanDeactivateService
    ]
})

export class AppRoutingModule { }

export const routedComponents = [
    LandingComponent,
    DashboardComponent,
    AboutComponent,
    RoomsComponent
];

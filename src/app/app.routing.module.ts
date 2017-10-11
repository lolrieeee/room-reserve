import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes:Routes = [
    {
        path: 'landing',
        component: LandingComponent
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
        component: RoomsComponent
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
    ]
})

export class AppRoutingModule { }

export const routedComponents = [
    LandingComponent,
    AboutComponent,
    RoomsComponent
];

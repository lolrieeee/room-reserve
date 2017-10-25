import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanDeactivateService } from './../services/can-deactivate-guard.service';
import { LoginGuardService } from './../services/login-guard.service';

import RoomsComponent from './rooms.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomFormComponent } from './rooms-form/rooms-form.component';

const routes: Routes = [
    {
        path: 'rooms/:id',
        component: RoomsComponent,
        //canActivate: [LoginGuardService],

        children: [
            {
                path: 'list',
                component: RoomListComponent
            },
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'form',
                component: RoomFormComponent
            },
            {
                path: '**',
                redirectTo: 'not/found',
                pathMatch: 'full'
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: [
        CanDeactivateService,
        LoginGuardService
    ]
})
export class RoomRoutingModule { }

export const routedComponents = [
    RoomsComponent,
    RoomListComponent,
    RoomFormComponent
]

// THIS IS THE BASE APP MODULE WE IMPORT EVERYTHING ELSE INTO
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';

import { LoginService } from './services/login.service';
//import { RoomService } from './services/room.service';

import { RoomModule } from './rooms/room.module';
import { AppRoutingModule, routedComponents } from './app.routing.module';

@NgModule({
    imports: [ // we import other modules here for THIS (OUR) module to use!
        BrowserModule,
        RoomModule,
        AppRoutingModule
    ],
    declarations:[ // components
        AppComponent,
        NavigationComponent,
        LoginComponent,
        FooterComponent,
        routedComponents
    ],
    providers: [ // services
        LoginService
    ],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }

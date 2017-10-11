// THIS IS THE BASE APP MODULE WE IMPORT EVERYTHING ELSE INTO
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './services/login.service';

import { AppRoutingModule, routedComponents } from './app.routing.module';

@NgModule({
    imports: [ // we import other modules here for THIS (OUR) module to use!
        BrowserModule,
        AppRoutingModule
    ],
    declarations:[ // components
        AppComponent,
        NavigationComponent,
        LoginComponent,
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

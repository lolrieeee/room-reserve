import { Component, OnInit } from '@angular/core';
import { ICanDeactivate } from './../services/can-deactivate-guard.service';

//import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'gw-room',
    templateUrl: './rooms.html',
    styleUrls: ['./rooms.css']
})

export default class RoomsComponent implements ICanDeactivate {
    public canThisActivate;

    constructor(){
        this.canThisActivate = true;
    }

    toggleCanDeactivate() {
        this.canThisActivate = !this.canThisActivate;
    }

    canDeactivate() {
        return true;
    }
}

/*
export class RoomsComponent implements OnInit {

    constructor(
        private activeRoute:ActivatedRoute
    ){}

    ngOnInit(){
        console.log('hello from room');

        //do this when you know the user won't change your url
        console.log('Snapshot', this.activeRoute.snapshot.paramMap.get('id'));

        //current way
        this.activeRoute.paramMap.subscribe((parameters:ParamMap) => {
            console.log('paramMap',parameters.get('id'));
        });
    }

}
*/

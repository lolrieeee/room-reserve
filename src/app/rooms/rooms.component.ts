import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
    selector: 'gw-room',
    templateUrl: './rooms.html',
    styleUrls: ['./rooms.css']
})

export default class RoomsComponent implements OnInit {
    public roomId:string;

    constructor(private _activatedRoute:ActivatedRoute){ }

    public ngOnInit() {
        this._activatedRoute.paramMap.subscribe(route => {
            this.roomId = route.get('id');
        });
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

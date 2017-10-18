import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'gw-landing',
    templateUrl: './landing.html',
    styleUrls: ['./landing.css']
})

export class LandingComponent implements OnInit {
    constructor(private myRoute: ActivatedRoute){
    }
    public showWarning;

    ngOnInit() {
        this.myRoute.fragment.subscribe(data => {
            console.log(data);
            this.showWarning = data;
        });

        /* EXAMPLE OF FULL SUBSCRIBE
        this.myRoute.fragment.subscribe({
            next: data => {
                console.log(data);
            },
            error: error => {
                console.log(error);
            },
            complete: () => {
                console.log('im done!');
            }
        });
        */
    }

    closeWarning() {
        this.showWarning = false;
        window.location.hash = '';
    }
}

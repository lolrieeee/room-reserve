import { Component } from '@angular/core';

@Component({
    selector:'gw-navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.css']
})

export class NavigationComponent {
    public navArray:INavigationItem[] = [
        {
            title: 'Home',
            url: 'landing'
        },
        {
            title: 'About',
            url: 'about'
        },
        {
            title: 'Donkey Kong',
            url: 'rooms/100'
        },
        {
            title: 'Zelda',
            url: 'rooms/200'
        },
        {
            title: 'Halo',
            url: 'rooms/300'
        }
    ]
}

interface INavigationItem {
    title:string,
    url:string
}

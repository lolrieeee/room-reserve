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
            url: 'rooms/donkey-kong'
        },
        {
            title: 'Zelda',
            url: 'rooms/zelda'
        },
        {
            title: 'Halo',
            url: 'rooms/halo'
        }
    ]
}

interface INavigationItem {
    title:string,
    url:string
}

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
            title: 'Rooms',
            url: 'rooms'
        },
        {
            title: 'Room 100',
            url: 'rooms/100'
        },
        {
            title: 'Room 200',
            url: 'rooms/200'
        },
        {
            title: 'Rooms 300',
            url: 'rooms/300'
        }
    ]
}

interface INavigationItem {
    title:string,
    url:string
}

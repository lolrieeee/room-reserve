import { Component } from '@angular/core';

@Component({
    selector:'gw-rooms-form',
    templateUrl:'./rooms-form.component.html'
})

export class RoomFormComponent {
    submitForm(ngForm){
        console.log(ngForm);
    }
}

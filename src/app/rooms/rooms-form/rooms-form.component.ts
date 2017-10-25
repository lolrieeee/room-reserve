import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgForm } from '@angular/forms';

import { ICanDeactivate } from './../../services/can-deactivate-guard.service';

import { IReservation } from './../../interfaces/IReservation';
//import { RoomService } from './../../services/room.service';

@Component({
    selector:'gw-rooms-form',
    templateUrl:'./rooms-form.component.html',
    styleUrls: ['./../rooms.css']
})
export class RoomFormComponent implements OnInit, ICanDeactivate {
    public roomId:string;
    public stepProcess = 'step 1';
    //public startHours:string[];
    public startHours:object[];
    public startMinutes:string[];
    public startDaytime:string[];
    public endHours:object[];
    public endMinutes:string[];
    public endDaytime:string[];
    public options:string[];

    @ViewChild('myForm')
    private _form:NgForm;

    constructor(/*private _roomService:RoomService*/ private _activatedRoute:ActivatedRoute){}

/*
    @Input()
    public roomId:string;
*/

    public ngOnInit() {
        //this.startHours = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        this.startHours = [
            {
                displayTime: '1',
                AM:'01',
                PM:'13'
            },
            {
                displayTime: '2',
                AM:'02',
                PM:'14'
            },
            {
                displayTime: '3',
                AM:'03',
                PM:'15'
            },
            {
                displayTime: '4',
                AM:'04',
                PM:'16'
            },
            {
                displayTime: '5',
                AM:'05',
                PM:'17'
            },
            {
                displayTime: '6',
                AM:'06',
                PM:'18'
            },
            {
                displayTime: '7',
                AM:'07',
                PM:'19'
            },
            {
                displayTime: '8',
                AM:'08',
                PM:'20'
            },
            {
                displayTime: '9',
                AM:'09',
                PM:'21'
            },
            {
                displayTime: '10',
                AM:'10',
                PM:'22'
            },
            {
                displayTime: '11',
                AM:'11',
                PM:'23'
            },
            {
                displayTime: '12',
                AM:'00',
                PM:'12'
            }
        ];
        this.startMinutes = ['00','15','30','45'];
        this.startDaytime = ['AM', 'PM'];

        //this.endHours = ['01','02','03','04','05','06','07','08','09','10','11','12'];
        this.endHours = [
            {
                displayTime: '1',
                AM:'01',
                PM:'13'
            },
            {
                displayTime: '2',
                AM:'02',
                PM:'14'
            },
            {
                displayTime: '3',
                AM:'03',
                PM:'15'
            },
            {
                displayTime: '4',
                AM:'04',
                PM:'16'
            },
            {
                displayTime: '5',
                AM:'05',
                PM:'17'
            },
            {
                displayTime: '6',
                AM:'06',
                PM:'18'
            },
            {
                displayTime: '7',
                AM:'07',
                PM:'19'
            },
            {
                displayTime: '8',
                AM:'08',
                PM:'20'
            },
            {
                displayTime: '9',
                AM:'09',
                PM:'21'
            },
            {
                displayTime: '10',
                AM:'10',
                PM:'22'
            },
            {
                displayTime: '11',
                AM:'11',
                PM:'23'
            },
            {
                displayTime: '12',
                AM:'00',
                PM:'12'
            }
        ];
        this.endMinutes = ['00','15','30','45'];
        this.endDaytime = ['AM','PM'];

        this.options = [
            "Client Meeting",
            "Job Interview",
            "SCRUM Meeting",
            "SCRUM Beating"
        ];

        this._activatedRoute.parent.paramMap.subscribe(param => {
            this._switchRoom(param.get('id'));
        });
    }

    public canDeactivate() {
        if ( this._form.pristine || this._form.submitted ) {
            return true;
        }

        return confirm('hehe');
    }

    public submitForm(formValues) {
        const reservation:IReservation = {
            email: formValues.myEmailInput,
            reason: formValues.reserveReason,
            endDateTime: formValues.endDateTime,
            startDateTime: formValues.startDateTime
        }
        console.log(reservation);
        //this._roomService.addReservation(roomId, reservation);
    }

    private _switchRoom(id:string) {
        this.roomId = id;
    }

    public checkStartTime() {
        if ( this.selectedStartHour && this.selectedStartMinute && this.selectedStartDaytime ) {
            return true;
        }

        return false;
    }

    public checkEndTime() {
        if ( this.selectedEndHour && this.selectedEndMinute && this.selectedEndDaytime ) {
            return true;
        }

        return false;
    }

    public checkReason() {
        if ( this.selectedReason ) {
            return true;
        }

        return false;
    }

    public goStep1() {
        this.stepProcess = 'step 1';
    }

    public goStep2() {
        this.stepProcess = 'step 2';
    }

    public goStep3() {
        this.stepProcess = 'step 3';
    }

    public selectedStartHour;
    public changeStartHour(picked) {
        this.selectedStartHour = picked;
    }

    public selectedStartMinute;
    public changeStartMinute(picked) {
        this.selectedStartMinute = picked;
    }

    public selectedStartDaytime;
    public changeStartDaytime(picked) {
        this.selectedStartDaytime = picked;
    }

    public selectedEndHour;
    public changeEndHour(picked) {
        this.selectedEndHour = picked;
    }

    public selectedEndMinute;
    public changeEndMinute(picked) {
        this.selectedEndMinute = picked;
    }

    public selectedEndDaytime;
    public changeEndDaytime(picked) {
        this.selectedEndDaytime = picked;
    }

    public selectedReason;
    public changeSelectedReason(picked) {
        this.selectedReason = picked;
    }

    public reviewReservation() {
        this.stepProcess = 'step 4';
        console.log(this._form);
        if (!this._form) return;

        let enterStartHour = this.selectedStartHour.AM;
        if( this.selectedStartDaytime === "PM" ) {
            enterStartHour = this.selectedStartHour.PM
        }

        let enterEndHour = this.selectedEndHour.AM;
        if( this.selectedEndDaytime === "PM" ) {
            enterEndHour = this.selectedEndHour.PM
        }
        console.log(enterStartHour);
        this._form.controls['startDateTime'].setValue(enterStartHour + ':' + this.selectedStartMinute);
        this._form.controls['endDateTime'].setValue(enterEndHour + ':' + this.selectedEndMinute);
        this._form.controls['reserveReason'].setValue(this.selectedReason);
    }
}

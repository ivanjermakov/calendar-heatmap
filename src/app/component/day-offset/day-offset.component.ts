import {Component, Input, OnInit} from '@angular/core'

@Component({
    selector: 'app-day-offset',
    templateUrl: './day-offset.component.html',
    styleUrls: [
        './../day/day.style.sass',
        './day-offset.style.sass',
    ]
})
export class DayOffsetComponent implements OnInit {

    @Input()
    size: number = 12

    constructor() {
    }

    ngOnInit(): void {
    }

}

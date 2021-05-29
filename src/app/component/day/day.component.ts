import {Component, Input, OnInit} from '@angular/core'
import {Day} from '../../model/Day'

@Component({
    selector: 'app-day',
    templateUrl: './day.component.html',
    styleUrls: ['./day.style.sass']
})
export class DayComponent implements OnInit {

    @Input()
    day: Day<number> | undefined

    @Input()
    size: number = 12

    constructor() {
    }

    ngOnInit(): void {
    }

}

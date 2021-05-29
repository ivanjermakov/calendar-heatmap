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

    @Input()
    showDate: boolean = false

    color: string | undefined
    textColor: string = 'hsl(27, 0%, 90%)'

    constructor() {
    }

    ngOnInit(): void {
        switch (this.day!.value) {
            case 0:
                this.color = 'hsl(27, 0%, 90%)'
                this.textColor = 'hsl(27, 0%, 40%)'
                break
            case 1:
                this.color = 'hsl(27, 48%, 70%)'
                break
            case 2:
                this.color = 'hsl(27, 48%, 50%)'
                break
            case 3:
                this.color = 'hsl(27, 48%, 35%)'
                break
        }
    }

}

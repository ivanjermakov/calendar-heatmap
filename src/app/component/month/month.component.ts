import {Component, Input, OnInit} from '@angular/core'
import {Month} from '../../model/Month'
import * as dayjs from 'dayjs'

@Component({
    selector: 'app-month',
    templateUrl: './month.component.html',
    styleUrls: ['./month.style.sass']
})
export class MonthComponent implements OnInit {

    @Input()
    month: Month<number> | undefined

    @Input()
    showLabel: boolean = true

    name: string | undefined

    offsetDays: number | undefined

    constructor() {
    }

    ngOnInit(): void {
        this.name = dayjs().month(this.month!.month).format('MMMM')
        this.offsetDays = this.month!.days[0].date.day()
    }

}

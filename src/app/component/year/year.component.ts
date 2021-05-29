import {Component, Input, OnInit} from '@angular/core'
import {Year} from '../../model/Year'


@Component({
    selector: 'app-year',
    templateUrl: './year.component.html',
    styleUrls: ['./year.style.sass']
})
export class YearComponent implements OnInit {

    @Input()
    columns: number = 3

    @Input()
    year: Year<number> | undefined

    constructor() {
    }

    ngOnInit(): void {
    }

}

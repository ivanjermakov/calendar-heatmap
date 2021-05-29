import {Component, Input, OnInit} from '@angular/core'
import {Day} from '../../model/Day'
import {Year} from '../../model/Year'

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.style.sass']
})
export class DataComponent implements OnInit {

    @Input()
    data: Day<number>[] = []

    months: Day<number>[][] = []
    years: Year<number>[] = []

    constructor() {
    }

    ngOnInit(): void {
        this.years = Year.fromData(this.data, 0)
        console.log(this.years)
    }

}

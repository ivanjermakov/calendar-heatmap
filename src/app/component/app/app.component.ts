import {Component} from '@angular/core'
import {Day} from '../../model/Day'
import * as dayjs from 'dayjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.style.sass']
})
export class AppComponent {
    data: Day<number>[] = [
        new Day<number>(dayjs('2020-12-31'), 1),
    ]
}

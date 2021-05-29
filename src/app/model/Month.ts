import {Day} from './Day'
import * as _ from 'lodash'

export class Month<T> {

    month: number
    days: Day<T>[]

    constructor(month: number, days: Day<T>[]) {
        this.month = month
        this.days = days
    }

    static groupByMonths(data: Day<any>[]): Month<any>[] {
        return _(data).groupBy(m => m.date.month()).map((ds, m) => new Month(Number(m), ds)).value()
    }

}

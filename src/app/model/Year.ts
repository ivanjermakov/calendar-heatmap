import {Month} from './Month'
import {Day} from './Day'
import * as _ from 'lodash'

export class Year<T> {

    year: number
    months: Month<T>[]

    constructor(year: number, months: Month<T>[]) {
        this.year = year
        this.months = months
    }

    static structure<T>(year: number, defaultValue: T): Year<T> {
        return new Year<T>(year, Month.groupByMonths(Day.generateYear(year, defaultValue)))
    }

    static fromData<T>(data: Day<T>[], defaultValue: T): Year<T>[] {
        const years: Year<T>[] = this.fromDays(data)
        const yearsStructure: Year<T>[] = _(years)
            .map(y => y.year)
            .map(y => this.structure(y, defaultValue))
            .value()
        data.forEach(forDay => {
            const year: Year<T> = yearsStructure.find(y => y.year === forDay.date.year())!
            const month: Month<T> = year.months.find(m => m.month === forDay.date.month())!
            const day: Day<T> = month.days.find(d => d.date.date() === forDay.date.date())!
            day.value = forDay.value
        })
        return yearsStructure
    }

    static fromDays<T>(days: Day<T>[]): Year<T>[] {
        return _(days).groupBy(d => d.date.year()).map((ms, y) => new Year(
            Number(y),
            Month.groupByMonths(ms)
        )).value()
    }

}

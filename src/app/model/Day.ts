import * as dayjs from 'dayjs'
import {Dayjs} from 'dayjs'

export class Day<T> {

    date: Dayjs
    value: T

    constructor(date: Dayjs, value: T) {
        this.date = date
        this.value = value
    }

    static generateYear<T>(year: number, defaultValue: T): Day<T>[] {
        const days = []

        let day = dayjs(`${year}-01-01`)
        let lastDay = day.add(1, 'year')

        while (day.isBefore(lastDay)) {
            days.push(new Day(day, defaultValue))
            day = day.add(1, 'day')
        }

        return days
    }
}

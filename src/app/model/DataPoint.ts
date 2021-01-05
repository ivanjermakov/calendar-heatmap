export class DataPoint<T> {

	constructor(date: Date, value: T) {
		this.date = date
		this.value = value
	}

	date: Date
	value: T

}

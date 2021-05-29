import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {AppComponent} from './component/app/app.component'
import {YearComponent} from './component/year/year.component'
import {MonthComponent} from './component/month/month.component'
import {DayComponent} from './component/day/day.component'
import {DayOffsetComponent} from './component/day-offset/day-offset.component'
import {DataComponent} from './component/data/data.component'


@NgModule({
    declarations: [
        AppComponent,
        YearComponent,
        MonthComponent,
        DayComponent,
        DayOffsetComponent,
        DataComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

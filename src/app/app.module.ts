import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './features/team/team.component';
import { DriverComponent } from './features/driver/driver.component';
import { CarComponent } from './features/car/car.component';
import { CircuitComponent } from './features/circuit/circuit.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { RaceComponent } from './features/race/race.component';
import { TeamDetailsComponent } from './features/team-details/team-details.component';
import { DriverDetailsComponent } from './features/driver-details/driver-details.component';
import { CarDetailsComponent } from './features/car-details/car-details.component';
import { CircuitDetailsComponent } from './features/circuit-details/circuit-details.component';
import { RaceDetailsComponent } from './features/race-details/race-details.component';
import { DriverStatisticsComponent } from './features/driver-statistics/driver-statistics.component';
import { TeamStatisticsComponent } from './features/team-statistics/team-statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    DriverComponent,
    CarComponent,
    CircuitComponent,
    CalendarComponent,
    RaceComponent,
    TeamDetailsComponent,
    DriverDetailsComponent,
    CarDetailsComponent,
    CircuitDetailsComponent,
    RaceDetailsComponent,
    DriverStatisticsComponent,
    TeamStatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

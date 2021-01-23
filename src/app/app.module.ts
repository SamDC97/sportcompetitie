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

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    DriverComponent,
    CarComponent,
    CircuitComponent,
    CalendarComponent,
    RaceComponent
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

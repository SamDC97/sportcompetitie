import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from './features/car/car.component';
import {CarDetailsComponent} from './features/car-details/car-details.component';
import {DriverComponent} from './features/driver/driver.component';
import {DriverDetailsComponent} from './features/driver-details/driver-details.component';
import {TeamComponent} from './features/team/team.component';
import {TeamDetailsComponent} from './features/team-details/team-details.component';
import {CircuitComponent} from './features/circuit/circuit.component';
import {CircuitDetailsComponent} from './features/circuit-details/circuit-details.component';
import {CalendarComponent} from './features/calendar/calendar.component';
import {RaceComponent} from './features/race/race.component';
import {RaceDetailsComponent} from './features/race-details/race-details.component';
import {TeamStatisticsComponent} from './features/team-statistics/team-statistics.component';
import {DriverStatisticsComponent} from './features/driver-statistics/driver-statistics.component';


const routes: Routes = [
  {path: '', redirectTo: '/teams', pathMatch: 'full'},
  {path: 'drivers', component: DriverComponent},
  {path: 'drivers/:id', component: DriverDetailsComponent},
  {path: 'cars', component: CarComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'teams/:id', component: TeamDetailsComponent},
  {path: 'circuits', component: CircuitComponent},
  {path: 'circuits/:id', component: CircuitDetailsComponent},
  {path: 'calendars', component: CalendarComponent},
  {path: 'races', component: RaceComponent},
  {path: 'races/:id', component: RaceDetailsComponent},
  {path: 'driver-statistics', component: DriverStatisticsComponent},
  {path: 'team-statistics', component: TeamStatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

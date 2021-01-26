import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarDetailsComponent} from './features/car-details/car-details.component';
import {DriverComponent} from './features/driver/driver.component';
import {DriverDetailsComponent} from './features/driver-details/driver-details.component';
import {TeamComponent} from './features/team/team.component';
import {TeamDetailsComponent} from './features/team-details/team-details.component';
import {CircuitComponent} from './features/circuit/circuit.component';
import {CircuitDetailsComponent} from './features/circuit-details/circuit-details.component';
import {CalendarComponent} from './features/calendar/calendar.component';
import {RaceDetailsComponent} from './features/race-details/race-details.component';
import {TeamStatisticsComponent} from './features/team-statistics/team-statistics.component';
import {DriverStatisticsComponent} from './features/driver-statistics/driver-statistics.component';
import {PagenotfoundComponent} from './features/pagenotfound/pagenotfound.component';
import {StartPageComponent} from './features/start-page/start-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/start-page', pathMatch: 'full'},
  {path: 'start-page', component: StartPageComponent},
  {path: 'drivers', component: DriverComponent},
  {path: 'drivers/:id', component: DriverDetailsComponent},
  {path: 'cars/:id', component: CarDetailsComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'teams/:id', component: TeamDetailsComponent},
  {path: 'circuits', component: CircuitComponent},
  {path: 'circuits/:id', component: CircuitDetailsComponent},
  {path: 'calendars', component: CalendarComponent},
  {path: 'races/:id', component: RaceDetailsComponent},
  {path: 'driver-statistics', component: DriverStatisticsComponent},
  {path: 'team-statistics', component: TeamStatisticsComponent},
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

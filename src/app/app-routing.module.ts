import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CarComponent} from './features/car/car.component';
import {DriverComponent} from './features/driver/driver.component';
import {TeamComponent} from './features/team/team.component';
import {CircuitComponent} from './features/circuit/circuit.component';
import {CalendarComponent} from './features/calendar/calendar.component';
import {RaceComponent} from './features/race/race.component';
import {TeamDetailsComponent} from './features/team-details/team-details.component';

const routes: Routes = [
  {path: '', redirectTo: '/teams', pathMatch: 'full'},
  {path: 'drivers', component: DriverComponent},
  {path: 'cars', component: CarComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'teams/:id', component: TeamDetailsComponent},
  {path: 'circuits', component: CircuitComponent},
  {path: 'calendars', component: CalendarComponent},
  {path: 'races', component: RaceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

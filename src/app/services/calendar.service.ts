import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CalendarModel} from '../models/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private calendarsUrl = '/api/calendars';
  private calendarUrl = '/api/generate-calendar/';

  constructor(private http: HttpClient, private router: Router) { }

  getCalendars(): Observable<CalendarModel[]> {
    console.log(this.calendarsUrl);
      return this.http.get<CalendarModel[]>(this.calendarsUrl).pipe(
          catchError(error => {
            return throwError(error.message);
          }
      ));
  }

  generateCalendars(numberOfRaces: number): void{
    console.log(this.calendarUrl + numberOfRaces);
    this.http.post(this.calendarUrl + numberOfRaces, null).subscribe();
    this.router.navigate(['/calendars/']);
  }
}

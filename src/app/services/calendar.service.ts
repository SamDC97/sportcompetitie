import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CalendarModel} from '../models/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private calendarsUrl = '/api/calendars';
  private calendarUrl = '/api/calendar/';

  constructor(private http: HttpClient) { }

  getCalendars(): Observable<CalendarModel[]> {
      return this.http.get<CalendarModel[]>(this.calendarsUrl).pipe(
          catchError(error => {
            return throwError(error.message);
          }
      ));
  }

  getByID(id: number): Observable<CalendarModel>{
    return this.http.get<CalendarModel>(this.calendarUrl + id);
  }
}

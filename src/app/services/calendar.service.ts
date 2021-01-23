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

  constructor(private http: HttpClient) { }

  getCalendars(): Observable<CalendarModel[]> {
        return this.http.get<CalendarModel[]>(this.calendarsUrl).pipe(
            catchError(error => {
              return throwError(error.message);
            }
        ));
    }
}

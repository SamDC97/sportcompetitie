import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {DriverStatisticsModel} from '../models/driver-statistics.model';

@Injectable({
  providedIn: 'root'
})
export class DriverStatisticsService {

  private driverStatisticsURL = '/api/driver-statistics';

  constructor(private http: HttpClient) { }

  getDriverStatistics(): Observable<DriverStatisticsModel[]> {
    return this.http.get<DriverStatisticsModel[]>(this.driverStatisticsURL).pipe(
        catchError(error => {
          return throwError(error.message);
        }));
  }
}

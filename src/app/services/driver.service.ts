import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {DriverModel} from "../models/driver.model";

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private driverUrl = '/api/drivers';

  constructor(private http: HttpClient) { }

  getDrivers(): Observable<DriverModel[]> {
      return this.http.get<DriverModel[]>(this.driverUrl).pipe(
          catchError(error => {
            return throwError(error.message);
          }
      ));
    }
}

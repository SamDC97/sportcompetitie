import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CarModel} from "../models/car.model";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carsUrl = '/api/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarModel[]> {
      return this.http.get<CarModel[]>(this.carsUrl).pipe(
          catchError(error => {
            return throwError(error.message);
          }
      ));
  }
}

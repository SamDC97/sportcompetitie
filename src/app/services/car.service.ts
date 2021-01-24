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
  private carUrl = '/api/car/';

  constructor(private http: HttpClient) { }

  getCars(): Observable<CarModel[]> {
      return this.http.get<CarModel[]>(this.carsUrl).pipe(
          catchError(error => {
            return throwError(error.message);
          }
      ));
  }

  getByID(id: number): Observable<CarModel>{
      return this.http.get<CarModel>(this.carUrl + id);
  }
}

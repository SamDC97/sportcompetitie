import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CircuitModel} from "../models/circuit.model";

@Injectable({
  providedIn: 'root'
})
export class CircuitService {

  private circuitsUrl = '/api/circuits';

  constructor(private http: HttpClient) { }

  getCircuits(): Observable<CircuitModel[]> {
      return this.http.get<CircuitModel[]>(this.circuitsUrl).pipe(
          catchError(error => {
            return throwError(error.message);
          }
      ));
  }
}

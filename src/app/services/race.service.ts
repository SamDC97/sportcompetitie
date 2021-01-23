import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {RaceModel} from '../models/race.model';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  private racesUrl = '/api/races';

  constructor(private http: HttpClient) { }

  getRaces(): Observable<RaceModel[]> {
      return this.http.get<RaceModel[]>(this.racesUrl).pipe(
          catchError(error => {
            return throwError(error.message);
          }
      ));
  }
}

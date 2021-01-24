import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {TeamStatisticsModel} from '../models/team-statistics.model';

@Injectable({
  providedIn: 'root'
})
export class TeamStatisticsService {

  private teamStatisticsURL = '/api/team-statistics';

  constructor(private http: HttpClient) { }

  getTeamStatistics(): Observable<TeamStatisticsModel[]> {
    return this.http.get<TeamStatisticsModel[]>(this.teamStatisticsURL).pipe(
        catchError(error => {
          return throwError(error.message);
        }));
  }
}

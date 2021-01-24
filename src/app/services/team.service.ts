import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {TeamModel} from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private teamsUrl = '/api/teams';
  private teamUrl = '/api/team/';

  constructor(private http: HttpClient) { }

  getTeams(): Observable<TeamModel[]> {
    return this.http.get<TeamModel[]>(this.teamsUrl).pipe(
        catchError(error => {
          return throwError(error.message);
        }));
  }

  getByID(id: number): Observable<TeamModel>{
    return this.http.get<TeamModel>(this.teamUrl + id);
  }
}

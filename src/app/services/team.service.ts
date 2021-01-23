import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {OrderModel} from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor() { }
}

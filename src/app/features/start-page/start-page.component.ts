import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {CalendarModel} from "../../models/calendar.model";
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  amountOfRaces1: number;
  calendars: CalendarModel[];

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
  }

  submitAmountOfRaces(amountOfRaces: number): void{
    this.amountOfRaces1 = amountOfRaces;
    this.calendarService.generateCalendars(amountOfRaces);
    //this.calendarService.generateCalendars(amountOfRaces).subscribe(data => this.calendars = data);
  }

}

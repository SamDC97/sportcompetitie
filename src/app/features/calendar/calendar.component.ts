import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CalendarModel} from "../../models/calendar.model";
import {CalendarService} from "../../services/calendar.service";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendars: CalendarModel[];

  constructor(private calendarService : CalendarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.calendarService.getCalendars().subscribe(data => this.calendars = data);
  }

  onSelectCalendar(id: number){
    this.router.navigate(['/circuits/', id]);
  }

}

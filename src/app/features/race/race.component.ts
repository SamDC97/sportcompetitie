import { Component, OnInit } from '@angular/core';
import {RaceModel} from "../../models/race.model";
import {RaceService} from "../../services/race.service";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: RaceModel[];

  constructor(private raceService : RaceService) { }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe(data => this.races = data);
  }
}

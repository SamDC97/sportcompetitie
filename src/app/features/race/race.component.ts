import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {RaceModel} from "../../models/race.model";
import {RaceService} from "../../services/race.service";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: RaceModel[];

  constructor(private raceService : RaceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe(data => this.races = data);
  }

  onSelectRace(id: number){
    this.router.navigate(['/races/', id]);
  }
}

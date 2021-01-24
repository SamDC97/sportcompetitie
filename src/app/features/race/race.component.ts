import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {RaceModel} from "../../models/race.model";
import {RaceService} from "../../services/race.service";
import {CircuitService} from "../../services/circuit.service";

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.css']
})
export class RaceComponent implements OnInit {

  races: RaceModel[];
  circuitName: string;

  constructor(private raceService : RaceService, private circuitService: CircuitService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.raceService.getRaces().subscribe(data => {
      this.races = data;
      this.setCircuitNames();
    });
  }

  onSelectRace(id: number){
    this.router.navigate(['/races/', id]);
  }

  setCircuitNames(){
    for (let race of this.races){
      this.circuitService.getByID(race.circuitId).subscribe(data => {
            race.circuitName = data.name;
          });
    }
  }

}

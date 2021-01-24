import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {RaceModel} from "../../models/race.model";
import {CircuitModel} from "../../models/circuit.model";
import {PositionModel} from "../../models/position.model";
import {RaceService} from "../../services/race.service";
import {CircuitService} from "../../services/circuit.service";
import {DriverService} from "../../services/driver.service";

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {

  race: RaceModel;

  constructor(private raceService : RaceService, private circuitService: CircuitService, private driverService: DriverService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.raceService.getByID(id)
      .subscribe(data => {
         this.race = data;
         this.circuitService.getByID(this.race.circuitId).subscribe(data => this.race.circuitName = data.name);
         this.getDriverNames();
      });
  }

  onSelectDriver(id: number){
    this.router.navigate(['/drivers/', id]);
  }

  onSelectCircuit(id: number){
    this.router.navigate(['/circuits/', id]);
  }

  getDriverNames(){
    for (let position of this.race.positions){
      this.driverService.getByID(position.driverId).subscribe(data => position.driverName = data.name);
    }
  }

}

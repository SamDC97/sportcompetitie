import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {CircuitModel} from "../../models/circuit.model";
import {CircuitService} from "../../services/circuit.service";

@Component({
  selector: 'app-circuit-details',
  templateUrl: './circuit-details.component.html',
  styleUrls: ['./circuit-details.component.css']
})
export class CircuitDetailsComponent implements OnInit {

  circuit: CircuitModel;

  constructor(private circuitService : CircuitService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.circuitService.getByID(id)
      .subscribe(data => this.circuit = data);
  }

}

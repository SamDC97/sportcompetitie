import { Component, OnInit } from '@angular/core';
import {CircuitModel} from "../../models/circuit.model";
import {CircuitService} from "../../services/circuit.service";

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {

  circuits: CircuitModel[];

  constructor(private circuitService : CircuitService) { }

  ngOnInit(): void {
    this.circuitService.getCircuits().subscribe(data => this.circuits = data);
  }
}

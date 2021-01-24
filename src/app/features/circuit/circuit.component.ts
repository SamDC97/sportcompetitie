import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CircuitModel} from "../../models/circuit.model";
import {CircuitService} from "../../services/circuit.service";

@Component({
  selector: 'app-circuit',
  templateUrl: './circuit.component.html',
  styleUrls: ['./circuit.component.css']
})
export class CircuitComponent implements OnInit {

  circuits: CircuitModel[];

  constructor(private circuitService : CircuitService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.circuitService.getCircuits().subscribe(data => this.circuits = data);
  }

  onSelectCircuit(id: number){
      this.router.navigate(['/circuits/', id]);
  }
}

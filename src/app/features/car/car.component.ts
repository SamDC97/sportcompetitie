import { Component, OnInit } from '@angular/core';
import {CarModel} from "../../models/car.model";
import {CarService} from "../../services/car.service";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: CarModel[];

  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.carService.getCars().subscribe(data => this.cars = data);
  }

}

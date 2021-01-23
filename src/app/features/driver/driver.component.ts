import { Component, OnInit } from '@angular/core';
import {DriverModel} from "../../models/driver.model";
import {DriverService} from "../../services/driver.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  drivers: DriverModel[];

  constructor(private driverService : DriverService) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(data => this.drivers = data);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {DriverModel} from "../../models/driver.model";
import {DriverService} from "../../services/driver.service";

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  drivers: DriverModel[];

  constructor(private driverService : DriverService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.driverService.getDrivers().subscribe(data => this.drivers = data);
  }

  onSelectDriver(id: number){
      this.router.navigate(['/drivers/', id]);
  }

}

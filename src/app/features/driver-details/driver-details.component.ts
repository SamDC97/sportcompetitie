import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {DriverModel} from "../../models/driver.model";
import {DriverService} from "../../services/driver.service";

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {

  driver: DriverModel;

  constructor(private driverService : DriverService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.driverService.getByID(id)
      .subscribe(data => this.driver = data);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DriverStatisticsModel} from "../../models/driver-statistics.model";
import {DriverStatisticsService} from "../../services/driver-statistics.service";

@Component({
  selector: 'app-driver-statistics',
  templateUrl: './driver-statistics.component.html',
  styleUrls: ['./driver-statistics.component.css']
})
export class DriverStatisticsComponent implements OnInit {

  driverStatisticsList!: DriverStatisticsModel[];

  constructor(private driverStatisticsService : DriverStatisticsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAsyncData();
  }

  async getAsyncData() {
      this.driverStatisticsList = await this.driverStatisticsService.getDriverStatistics().toPromise();
  }

  onSelectDriver(id: number){
      this.router.navigate(['/drivers/', id]);
  }

  onSelectTeam(id: number){
    this.router.navigate(['/teams/', id]);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TeamStatisticsModel} from "../../models/team-statistics.model";
import {TeamStatisticsService} from "../../services/team-statistics.service";

@Component({
  selector: 'app-team-statistics',
  templateUrl: './team-statistics.component.html',
  styleUrls: ['./team-statistics.component.css']
})
export class TeamStatisticsComponent implements OnInit {

  teamStatisticsList!: TeamStatisticsModel[];

  constructor(private teamStatisticsService : TeamStatisticsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getAsyncData();
  }

  async getAsyncData() {
      this.teamStatisticsList = await this.teamStatisticsService.getTeamStatistics().toPromise();
  }

  onSelectTeam(id: number){
    this.router.navigate(['/teams/', id]);
  }
}

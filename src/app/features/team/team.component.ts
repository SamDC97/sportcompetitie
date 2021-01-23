import { Component, OnInit } from '@angular/core';
import {TeamModel} from "../../models/team.model";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams: TeamModel[];

  constructor(private teamService : TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(data => this.teams = data);
  }

}

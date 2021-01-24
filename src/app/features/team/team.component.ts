import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TeamModel} from "../../models/team.model";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teams!: TeamModel[];

  constructor(private teamService : TeamService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(data => this.teams = data);
  }

  onSelect(id: number){
    this.router.navigate(['/teams/', id]);
  }

}

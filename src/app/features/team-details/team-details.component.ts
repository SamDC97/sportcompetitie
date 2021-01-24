import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {TeamModel} from "../../models/team.model";
import {TeamService} from "../../services/team.service";

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  team: TeamModel;

  constructor(private teamService : TeamService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.teamService.getByID(id)
      .subscribe(data => this.team = data);
  }

  onSelectDriver(id: number){
    this.router.navigate(['/drivers/', id]);
  }

  onSelectCar(id: number){
    this.router.navigate(['/cars/', id]);
  }
}

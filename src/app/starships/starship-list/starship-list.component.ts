import { Component, OnInit } from '@angular/core';

import { Starship } from '../../models/starship.model';
import { SWAPIService } from '../../swapi.service';
import { AppConfig } from '../../config/app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {

  starships: Starship[];
  showSpinner: boolean;

  constructor(private swapiService: SWAPIService, private router: Router) {

    this.swapiService.getAllStarships().subscribe((starships: Array<Starship>) => {
      this.starships = starships;
      this.showSpinner = false;
    });

  }

  seeStarshipDetails(starship): void {
    const starshipId = starship.url.split('/');
    this.router.navigate([AppConfig.routes.starships + '/' + starshipId[5]]);
  }

  ngOnInit() {
    this.showSpinner = true;
  }

}

import { Component, OnInit } from '@angular/core';

import { Starship } from '../../models/starship.model';
import { SWAPIService } from '../../swapi.service';

import { ActivatedRoute } from '@angular/router';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  starship: Starship;
  pilotsOfStarship: Character[];
  numberOfPilots = 0;
  showSpinner: boolean;

  constructor(private swapiService: SWAPIService, private activatedRoute: ActivatedRoute) {
    this.pilotsOfStarship = Array();
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.swapiService.getStarshipById(params['id']).subscribe((starship: Starship) => {

          this.starship = starship;
          this.showSpinner = false;

          // Get pilots
          this.starship.pilots.forEach(pilot => {
            const pilotId = pilot.split('/');
            this.swapiService.getCharacterById(pilotId[5]).subscribe((p: Character) => {
              this.pilotsOfStarship.push(p);
              this.numberOfPilots++;
            });
          });

        });
      }
    });

  }

  ngOnInit() {
    this.showSpinner = true;
  }

}

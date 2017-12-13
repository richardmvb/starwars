import { Component, OnInit } from '@angular/core';

import { Character } from '../../models/character.model';
import { Specie } from '../../models/specie.model';
import { SWAPIService } from '../../swapi.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {
  character: Character;
  showSpinner: boolean;
  characterSpecie: string;

  constructor(private swapiService: SWAPIService, private activatedRoute: ActivatedRoute) {
    this.characterSpecie = '';
    this.activatedRoute.params.subscribe((params: any) => {
      if (params['id']) {
        this.swapiService.getCharacterById(params['id']).subscribe((character: Character) => {
          this.character = character;
          this.showSpinner = false;

          this.character.species.forEach(specie => {
            const specieId = specie.split('/');
            this.swapiService.getSpecieById(specieId[5]).subscribe((s: Specie) => {
              this.characterSpecie = s.name;
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

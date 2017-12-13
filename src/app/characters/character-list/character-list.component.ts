import { Component, OnInit } from '@angular/core';

import { Character } from '../../models/character.model';
import { SWAPIService } from '../../swapi.service';
import { AppConfig } from '../../config/app.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Character[];
  showSpinner: boolean;

  constructor(private swapiService: SWAPIService, private router: Router) {

    this.swapiService.getAllCharacters().subscribe( (characters: Array<Character>) => {
      this.characters = characters;
      this.showSpinner = false;
    });

  }

  seeCharacterDetails(character): void {
    const starshipId = character.url.split('/');
    this.router.navigate([AppConfig.routes.characters + '/' + starshipId[5]]);
  }

  ngOnInit() {
    this.showSpinner = true;
  }

}

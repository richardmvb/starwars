import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppConfig } from './config/app.config';

import { Character } from './models/character.model';
import { Starship } from './models/starship.model';
import { Specie } from './models/specie.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SWAPIService {

  charactersUrl: string;
  starshipsUrl: string;
  speciesUrl: string;
  toJson: string;

  private handleError(error: any) {
    if (error instanceof Response) {
      return Observable.throw(error.json()['error'] || 'backend server error');
    }
    return Observable.throw(error || 'backend server error');
  }

  constructor(private http: HttpClient) {

    this.toJson = '?format=json';
    this.charactersUrl = AppConfig.endpoints.base + AppConfig.endpoints.character;
    this.starshipsUrl = AppConfig.endpoints.base + AppConfig.endpoints.starship;
    this.speciesUrl = AppConfig.endpoints.base + AppConfig.endpoints.specie;

  }

  getAllCharacters(): Observable<Character[]> {
    return this.http.get(this.charactersUrl + this.toJson)
      .map((response: any) => {
        return response.results;
      })
      .catch(error => this.handleError(error));
  }

  getCharacterById(characterId: string): Observable<Character> {
    return this.http.get(this.charactersUrl + '/' + characterId + this.toJson)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  getAllStarships(): Observable<Starship[]> {
    return this.http.get(this.starshipsUrl + this.toJson)
      .map((response: any) => {
        return response.results;
      })
      .catch(error => this.handleError(error));
  }

  getStarshipById(startshipId: string): Observable<Starship> {
    return this.http.get(this.starshipsUrl + '/' + startshipId  + this.toJson)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

  getSpecieById(specieId: string): Observable<Specie> {
    return this.http.get(this.speciesUrl + '/' + specieId + this.toJson)
      .map(response => {
        return response;
      })
      .catch(error => this.handleError(error));
  }

}

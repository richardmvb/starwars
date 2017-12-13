import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_CONFIG, AppConfig } from './config/app.config';
import { SWAPIService } from './swapi.service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CharactersComponent } from './characters/characters.component';
import { StarshipsComponent } from './starships/starships.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { CharacterListComponent } from './characters/character-list/character-list.component';
import { StarshipDetailComponent } from './starships/starship-detail/starship-detail.component';
import { StarshipListComponent } from './starships/starship-list/starship-list.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material.module';
import { NavComponent } from './template/nav/nav.component';
import { FooterComponent } from './template/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    StarshipsComponent,
    CharacterDetailComponent,
    CharacterListComponent,
    StarshipDetailComponent,
    StarshipListComponent,
    HomeComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [
    SWAPIService,
    HttpClient,
    { provide: APP_CONFIG, useValue: AppConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

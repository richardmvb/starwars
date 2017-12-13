import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { CharacterDetailComponent } from './characters/character-detail/character-detail.component';
import { StarshipsComponent } from './starships/starships.component';
import { StarshipDetailComponent } from './starships/starship-detail/starship-detail.component';

import { AppConfig } from './config/app.config';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: AppConfig.routes.characters,
        component: CharactersComponent
    },
    {
        path: AppConfig.routes.characters + '/:id',
        component: CharacterDetailComponent
    },
    {
        path: AppConfig.routes.starships,
        component: StarshipsComponent
    },
    {
        path: AppConfig.routes.starships + '/:id',
        component: StarshipDetailComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {
}

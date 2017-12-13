import { InjectionToken } from '@angular/core';

import { Config } from './interface.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: Config = {
    routes: {
        characters: 'characters',
        starships: 'starships'
    },
    endpoints: {
        base: 'https://swapi.co/api/',
        character: 'people',
        starship: 'starships',
        specie: 'species'
    }
};

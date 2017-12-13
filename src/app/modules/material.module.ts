import {
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatProgressSpinnerModule
    ],
    exports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatProgressSpinnerModule
    ],
})

export class MaterialModule {
}

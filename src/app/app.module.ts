import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from "./heroes/heroes.component";
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppComponent,
    HeroesComponent,
  ]
})
export class AppModule { }

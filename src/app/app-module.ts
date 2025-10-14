import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyComponent } from './my-component/my-component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe-pipe';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {  HttpClientModule } from '@angular/common/http';
import { AfficherPokemon } from './afficher-pokemon/afficher-pokemon';
import { PokeAPI } from './poke-api';
import { ChercheAffichageBind } from './cherche-affichage-bind';


@NgModule({
  declarations: [
    App,
    MyComponent,
    FilterPokemonPipePipe,
    AfficherPokemon
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),PokeAPI, ChercheAffichageBind
  ],
  bootstrap: [App]
})
export class AppModule { }

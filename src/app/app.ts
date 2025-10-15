import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokedemo');

  montrerPokemon:Boolean = true;

  onToggleChange(on:boolean){
    console.log(on);
    this.montrerPokemon = !on;
  }
}

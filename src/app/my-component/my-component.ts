import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent {
  id:string = ""
  resultat:string = "Info sur pokemon : "
  pokemons:Pokemon[] = [new Pokemon(0,"Pikachu"),new Pokemon(1,"Squirtle"),new Pokemon(2,"Charizard"),new Pokemon(3,"Geodude")];
  selectedPokemon ="";

  chercher_pokemon(){
    var str:string = "Info sur pokemon : ";
    this.resultat = str + this.id;
  }
}

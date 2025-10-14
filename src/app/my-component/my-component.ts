import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeAPI } from '../poke-api';
import { ChercheAffichageBind } from '../cherche-affichage-bind';

@Component({
  selector: 'app-my-component',
  standalone: false,
  templateUrl: './my-component.html',
  styleUrl: './my-component.css'
})
export class MyComponent implements OnInit {
  id:string = "";
  pok_nom = "";
  resultat:string = "Info sur pokemon : ";
  pokemons:Pokemon[] = [new Pokemon(0,"Pikachu"),new Pokemon(1,"Squirtle"),new Pokemon(2,"Charizard"),new Pokemon(3,"Geodude")];
  selectedPokemon:Pokemon | null = null;

  constructor(private pokeAPI:PokeAPI, private shared: ChercheAffichageBind){
  //   this.pokeAPI.getPokemonList(300).subscribe({
  //   next: data => console.log('API working:', data),
  //   error: err => console.error('API error:', err)
  // });
  }

  ngOnInit(): void {
      this.loadPokemonList();
  }

  loadPokemonList() {
  this.pokeAPI.getPokemonList(100).subscribe({
    next: (data) => {
      console.log('Pokémon list:', data);
      this.pokemons = data.results.map((p: any) => {
        const id = +p.url.split('/')[6];
        return new Pokemon(id, p.name);
      });
    },
    error: (err) => console.error('Error fetching Pokémon:', err)
  });
}


  chercher_pokemon_id(){
    const str = "Info sur pokemon : ";
    this.selectedPokemon = this.pokemons.find(e => e.id === +this.id) ?? null;
    if (this.selectedPokemon) {
      this.resultat = `${str}\nId:${this.id}\nNom: ${this.selectedPokemon.nom}`;
      this.shared.setPokemonId(this.id); //mise à jour du service
    }
  }

  
  chercher_pokemon_nom(){
    const str = "Info sur pokemon : ";
    this.selectedPokemon = this.pokemons.find(e => e.nom === this.pok_nom) ?? null;
    if (this.selectedPokemon) {
      this.resultat = `${str}\nId:${this.selectedPokemon.id}\nNom: ${this.selectedPokemon.nom}`;
      this.shared.setPokemonId(this.selectedPokemon.id.toString()); //mise à jour du service
    }
  }

}

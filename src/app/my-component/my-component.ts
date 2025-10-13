import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokeAPI } from '../poke-api';

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

  constructor(private pokeAPI:PokeAPI){
  //   this.pokeAPI.getPokemonList(300).subscribe({
  //   next: data => console.log('✅ API working:', data),
  //   error: err => console.error('❌ API error:', err)
  // });
  }

  ngOnInit(): void {
      this.loadPokemonList();
  }

  loadPokemonList() {
    this.pokeAPI.getPokemonList(100).subscribe({
      next: (data) => {
        console.log('Pokémon list:', data);
        this.pokemons = data.results.map(
          (p: any, index: number) => new Pokemon(index, p.name)
        );
      },
      error: (err) => console.error('Error fetching Pokémon:', err)
    });
  }

  chercher_pokemon_id(){
    var str:string = "Info sur pokemon : ";
    this.selectedPokemon = this.pokemons.filter(e=> e.id === +this.id)?.[0]
    this.resultat = str +"\n"+ "Id:"+this.id +"\n"+"Nom: "+this.selectedPokemon.nom;
  }

  
  chercher_pokemon_nom(){
    var str:string = "Info sur pokemon : ";
    this.selectedPokemon = this.pokemons.filter(e=> e.nom === this.pok_nom)?.[0]
    this.resultat = str +"\n"+ "Id:"+this.selectedPokemon.id +"\n"+"Nom: "+this.selectedPokemon.nom;
  }


  // onPokemonSelected(pokemon: Pokemon) {
  //   if (pokemon) {
  //     this.pok_nom = pokemon.nom;
  //     this.selectedPokemon = pokemon;
  //     this.chercher_pokemon_nom();
  //   }
  // }


}

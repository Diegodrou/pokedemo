import { Component, OnInit } from '@angular/core';
import { ChercheAffichageBind } from '../cherche-affichage-bind';
import { PokeAPI } from '../poke-api';

@Component({
  selector: 'app-afficher-pokemon',
  standalone: false,
  templateUrl: './afficher-pokemon.html',
  styleUrl: './afficher-pokemon.css'
})
export class AfficherPokemon implements OnInit {
  poke_nom:string = "";
  poke_id:string = "";
  poke_stats:string = "";
  poke_img:string ="";

  constructor(private shared: ChercheAffichageBind, private pokeAPI: PokeAPI) {}

  ngOnInit(): void {
    //On "souscrit" à l’observable du service
    this.shared.pokemonId$.subscribe(id => {
      if (id) {
        this.poke_id = id;
        this.loadPokemonDetails(id);
      }
    });
  }

  loadPokemonDetails(id: string) {
    this.pokeAPI.getPokemonDetails(id).subscribe({
      next: (data) => {
        this.poke_nom = data.name;
        this.poke_img = data.sprites.front_default;
        this.poke_stats = data.stats.map((s: any) => `${s.stat.name}: ${s.base_stat}`).join(', ');
      },
      error: (err) => console.error('Error fetching Pokémon details:', err)
    });
  }
}

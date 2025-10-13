import { Component } from '@angular/core';

@Component({
  selector: 'app-afficher-pokemon',
  standalone: false,
  templateUrl: './afficher-pokemon.html',
  styleUrl: './afficher-pokemon.css'
})
export class AfficherPokemon {
  poke_nom:string = "";
  poke_id:string = "";
  poke_stats:string = "";
  poke_img:string ="";
}

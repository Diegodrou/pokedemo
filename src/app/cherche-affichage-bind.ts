import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChercheAffichageBind {
  // On crée un observable avec une valeur initiale vide
  private pokemonIdSource = new BehaviorSubject<string>('');
  
  // Observable public auquel les composants peuvent s'abonner
  pokemonId$ = this.pokemonIdSource.asObservable();

  // Méthode pour mettre à jour le Pokémon sélectionné
  setPokemonId(id: string) {
    this.pokemonIdSource.next(id);
  }
  

}

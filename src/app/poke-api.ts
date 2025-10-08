import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeAPI {
  private baseURL = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des pokemon (CORRIGÉE)
  getPokemonList(limit: number = 20, offset: number = 0): Observable<any> {
    const url = `${this.baseURL}/pokemon?limit=${limit}&offset=${offset}`;
    return this.http.get(url);
  }


}

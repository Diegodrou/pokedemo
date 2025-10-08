import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';

@Pipe({
  name: 'filterPokemonPipe',
  standalone: false
})
export class FilterPokemonPipePipe implements PipeTransform {

   transform(pokes: Pokemon[], property: keyof Pokemon, searchString: string): Pokemon[] {
    if (!pokes || !property || !searchString) return pokes;
    const lowerSearch = searchString.toLowerCase();
    return pokes.filter(p => String(p[property]).toLowerCase().includes(lowerSearch));
  }

}

import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/internal/operators/map';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {

  constructor(
    private apiService: ApiService
  ) { }
  pokemonsToShow$: Subject<any> = new Subject();
  searchResults$: Subject<any> = new Subject();

  fetch(param: any) {
    this.apiService.getPaginatedResults(param).pipe(map((res: any) => res.results.map((result: any) => result.url))).subscribe((pokemonUrls: string[]) => {
      const requests = pokemonUrls.map(url => this.apiService.getPokemonByUrl(url))
      forkJoin(requests).subscribe((pokemons: any[]) => {
        this.pokemonsToShow$.next(pokemons);
      })
    })
  }

  searchByNameOrId(param: number | string) {
    this.apiService.searchByNameOrId(param).subscribe((res) => {
      this.searchResults$.next(res);
    })
  }

}

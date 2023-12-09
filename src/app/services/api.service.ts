import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  fetch() {
    return this.http.get('https://pokeapi.co/api/v2/')
  }

  getPokemons(): Observable<any> {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemonByUrl(url: string): Observable<any> {
    return this.http.get(url);
  }

  getMoves(param: any) {
    return this.http.get(param)
  }

  getPaginatedResults(param: any) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${param}`)
  }

  searchByNameOrId(param: number | string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${param}`)
  }


}

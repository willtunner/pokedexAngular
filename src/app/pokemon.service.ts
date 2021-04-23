import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from 'src/_model/pokemon';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(  private http: HttpClient ) { }

  read(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>( this.baseUrl )
  }

  get(baseUrl: string, limit = 8, offset = 0 ) {
    return this.http.get(`${baseUrl}?limit=${limit}&offset=${offset}`)
  }

  getById(url: string): Observable<any> {
    return this.http.get(url);
  }


}




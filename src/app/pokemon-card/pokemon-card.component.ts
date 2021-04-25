import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  page = {
    totalRecords: 151,
    limit: 8,
    offset: 0,
    actualPage: 0,
  };

  public pokemons: Pokemon[] = [ ];

  constructor(private pokemonService: PokemonService) { }

  public leadingZero(srt: string | number, size: number = 3): string {
    let s = String(srt);
    while (s.length < (size || 2)) {
      s = '0' + s;
    }
    return s;
  }


  ngOnInit(): void {
    this.getPokemons(this.page.offset, this.page.limit);
  }

  public getPokemons(offset: number, limit: number) {
    this.pokemonService
      .get(this.baseUrl, limit, offset)
      .subscribe((response: any) => {
        this.pokemons = response.results;
        this.pokemons.forEach((el: any, index) => {
          this.pokemonService.getById(el.url).subscribe((pokemon: Pokemon) => {
            this.pokemons[index] = pokemon;
          });
        });
      });
  }

  public undo() {
    this.getPokemons( (this.page.limit * 2), this.page.limit);
  }

  public prev() {
    this.getPokemons( (this.page.limit * 3), this.page.limit);
  }

}


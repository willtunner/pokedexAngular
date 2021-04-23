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
    this.pokemonService.get(this.baseUrl, 8, 0).subscribe((response: any) => {
      this.pokemons = response.results;
      this.pokemons.forEach((el: any, index) => {
        this.pokemonService.getById(el.url).subscribe((pokemon: Pokemon) => {
          this.pokemons[index] = pokemon;
          console.log(this.pokemons);
        });
      });
    });
  }

}


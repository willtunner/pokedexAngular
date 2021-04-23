import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/_model/pokemon';
import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  public pokemons: Pokemon[] = [ ];

  constructor(private pokemonService: PokemonService) {}

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

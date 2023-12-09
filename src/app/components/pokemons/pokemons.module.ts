import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';



@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    // PokemonCardModule
  ],
  exports: [
    PokemonsComponent
  ]
})
export class PokemonsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonsComponent } from './pokemons.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCardModule } from './pokemon-card/pokemon-card.module';
import { MatIconModule } from '@angular/material/icon';
import { ModalComponent } from '../modal/modal.component';
import { ModalModule } from '../modal/modal.module';



@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonCardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ModalModule
    // PokemonCardModule
  ],
  exports: [
    PokemonsComponent
  ]
})
export class PokemonsModule { }

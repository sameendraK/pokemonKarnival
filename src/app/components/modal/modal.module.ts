import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MovesModule } from '../moves/moves.module';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonsComponent } from '../pokemons/pokemons.component';

@NgModule({
  declarations: [
    // ModalComponent
    // PokemonsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MovesModule // Import MovesModule here as ModalModule requires it
  ]
})
export class ModalModule { }

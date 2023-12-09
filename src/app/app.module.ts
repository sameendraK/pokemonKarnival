import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { PokemonCardModule } from './components/pokemons/pokemon-card/pokemon-card.module';
import { PokemonsModule } from './components/pokemons/pokemons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button'
import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms'
import { MovesModule } from './components/moves/moves.module';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchBarModule } from './components/search-bar/search-bar.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    PokemonCardModule,
    PokemonsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    MovesModule,
    SearchBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

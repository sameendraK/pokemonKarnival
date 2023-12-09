import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovesComponent } from './moves.component';

@NgModule({
  declarations: [
    MovesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MovesComponent]
})
export class MovesModule { }

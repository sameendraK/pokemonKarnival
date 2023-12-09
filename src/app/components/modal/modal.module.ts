import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MovesModule } from '../moves/moves.module';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MovesModule // Import MovesModule here as ModalModule requires it
  ]
})
export class ModalModule { }

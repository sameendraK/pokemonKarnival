import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moves',
  templateUrl: './moves.component.html',
  styleUrls: ['./moves.component.scss']
})
export class MovesComponent {

  @Input()
  data: any;
}

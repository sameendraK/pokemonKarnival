import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input()
  details: any[] = [];
  // @Input()
  name: string = '';
  // @Input()
  height: number = 0;
  // @Input()
  weight: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes && changes['details']) {
      let details = changes['details'];
      this.assignValues(details)
      // this.name = changes['name']
    }
  }
  assignValues(details: any) {
    this.name = details.currentValue.name;
    this.height = details.currentValue.height;
    this.weight = details.currentValue.weight
  }
  clickHandler(event: any) {
    console.log(event)
  }
}

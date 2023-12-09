import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input()
  details: any;
  // @Input()
  name: string = '';
  // @Input()
  height: number = 0;
  // @Input()
  weight: number = 0;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.assignValues();
    // if (changes && changes['details']) {
    //   let details = changes['details'];
    //   this.assignValues(details)
    //   // this.name = changes['name']
    // }
  }
  assignValues() {
    this
    // this.name = details.name;
    // this.height = details.currentValue.height;
    // this.weight = details.currentValue.weight
    // // this.imageUrl = details.currentValue.sprites.
  }
  clickHandler(event: any) {
    console.log(event)
  }
}

import { Component, Input, SimpleChanges } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { ApiService } from 'src/app/services/api.service';
import { ModalComponent } from '../../modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

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
  moves: any;
  // dialogRef: any;
  vcRef: any;
  constructor(
    private apiService: ApiService,
    private dialogRef: MatDialog,

  ) { }

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

  openModal(record: any) {
    let listOfUrls = record.moves.map((rec: any) => {
      return this.apiService.getMoves(rec.move.url)
    })
    forkJoin(listOfUrls).subscribe((responses: any) => {
      console.log(responses);
      this.moves = responses;
      this.dialogRef.open(ModalComponent, {
        viewContainerRef: this.vcRef,
        data: { record, responses },
        minHeight: '90vh',
        minWidth: '90vw'
      });
    })
  }
}

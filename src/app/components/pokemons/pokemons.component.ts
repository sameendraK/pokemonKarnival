import { Component, ViewContainerRef } from '@angular/core';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
import { map, switchMap } from 'rxjs/operators';
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { PaginationService } from 'src/app/services/pagination.service';
import { DataStoreService } from 'src/app/services/data-store.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent {
  noRecords: boolean = true;
  clickHandler(record: any) {
    console.log(record)
  }
  pokemonsToShow: any[] = [];
  apiResponse: boolean = false;

  constructor(private apiService: ApiService,
    private dialogRef: MatDialog,
    private vcRef: ViewContainerRef,
    private paginationService: PaginationService,
    private dataStoreService: DataStoreService
  ) {
    this.dataStoreService.fetch(this.paginationService.buttonCount);
    this.dataStoreService.pokemonsToShow$.subscribe((res) => {
      if (res && res.length > 0) {
        // this.noRecords = false
        this.setNoRecords(res);
        this.apiResponse = true;
        this.pokemonsToShow = res;
      }
      else {
        this.noRecords = true;
      }
    })
    this.dataStoreService.searchResults$.subscribe((res) => {
      this.pokemonsToShow = [];
      this.setNoRecords(res);
      this.pokemonsToShow.push(res);
    })
  }
  setNoRecords(res: any) {
    if (res.length > 0) {
      this.noRecords = false;
    }
    else {
      this.noRecords = true;
    }
  }
  
  moves: any[] = []
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

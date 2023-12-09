import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(
    private dataStoreService: DataStoreService
  ) { 
    this.dataStoreService.pokemonsToShow$.subscribe((res)=>{
      // this.paginat
    })
  }
  button$: Subject<number> = new Subject();
  buttonCount: number = 0;


}

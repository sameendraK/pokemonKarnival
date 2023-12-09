import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService {

  constructor() { }

  searchText$: Subject<any> = new Subject();



}

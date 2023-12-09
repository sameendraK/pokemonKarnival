import { Component } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';
import { DataStoreService } from 'src/app/services/data-store.service';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  constructor(
    private searchBarService: SearchBarService,
    private dataStoreService: DataStoreService
  ) {
  }
  searchText: string = '';

  inputChangeHandler(event: any) {
    // this.searchBarService.searchText$.next(this.searchText);
    if (this.searchText.length === 0) {
      this.dataStoreService.fetch(0);
    }
    else {
      this.dataStoreService.searchByNameOrId(this.searchText);
    }
    // this.searchText = value;
    //   const typedValue = event.target.value;
    //   fromEvent(typedValue, 'keyup')
    //     .pipe(
    //       debounceTime(1000)
    //     )
    //     .subscribe((event: any) => {
    //       const typedValue = (event.target as HTMLInputElement).value;
    //       this.searchBarService.searchText$.next(typedValue);
    //     });

    //   console.log('value', this.searchText)
  }
}

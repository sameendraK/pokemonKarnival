import { Component, ViewEncapsulation } from '@angular/core';
import { PaginationService } from './services/pagination.service';
import { DataStoreService } from './services/data-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  constructor(private paginationService: PaginationService,
    private dataStoreService: DataStoreService
  ) { }
  title = 'pokemon';
  buttonCount: number = 0;
  isFirstPage: boolean = true;

  nextPageClickHandler(event: any) {
    this.paginationService.buttonCount += 1
    this.dataStoreService.fetch(this.paginationService.buttonCount += 1)
    this.setIsFirstPage();
  }
  setIsFirstPage() {
    if (this.paginationService.buttonCount === 0) {
      this.isFirstPage = true
    }
    else {
      this.isFirstPage = false
    }
  }
  previousPageClickHandler($event: any) {
    if (this.paginationService.buttonCount === 0) {
      this.paginationService.buttonCount = 0
    }
    else {
      this.paginationService.buttonCount -= 1
    }
    this.setIsFirstPage();
    this.dataStoreService.fetch(this.paginationService.buttonCount -= 1)
  }
}

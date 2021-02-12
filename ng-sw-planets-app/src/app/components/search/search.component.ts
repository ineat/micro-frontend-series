import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>()
  searchValue: string = '';

  handleSearch() {
    this.search.emit(this.searchValue)
  }

  handleClear() {
    this.searchValue = ''
    this.search.emit(this.searchValue)
  }
}

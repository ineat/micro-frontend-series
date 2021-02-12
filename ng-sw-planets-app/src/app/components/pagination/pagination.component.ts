import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() pageNumber: Number;
  @Output() pageChange = new EventEmitter<string>()
  pages = [];
  current = 1;

  constructor() { }

  ngOnInit(): void {
    this.createPagination();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createPagination();
  }

  createPagination() {
    this.pages = [];
    for(let i = 1; i <= this.pageNumber; i++) {
      this.pages = [...this.pages, {id: i, text: i }]
    }
  }

  handleClick(pageIndex) {
    this.pageChange.emit(pageIndex)
  }

}

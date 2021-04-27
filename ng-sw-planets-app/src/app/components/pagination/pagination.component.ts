import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() pageNumber: number
  @Input() currentPage: string
  @Output() pageChange = new EventEmitter<string>()
  pages = []

  constructor() {}

  ngOnInit(): void {
    this.createPagination()
  }

  ngOnChanges() {
    this.createPagination()
  }

  createPagination() {
    this.pages = [];
    for(let i = 1; i <= this.pageNumber; i++) {
      this.pages = [...this.pages, {id: i, text: i, current: i === parseInt(this.currentPage) }]
    }
  }

  handleClick(pageIndex) {
    this.pageChange.emit(pageIndex)
  }

}

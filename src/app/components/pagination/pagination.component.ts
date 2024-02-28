import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  currentPage: number = 1;

  @Output() Pagination: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: number) {
    this.currentPage = page;
    this.Pagination.emit(page);
  }
}

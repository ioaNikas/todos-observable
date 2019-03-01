import { Component, OnInit } from '@angular/core';
import { TodoFilter, initialFilters } from './filters';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  filters: TodoFilter[];
  activeFilter: string;
  constructor() { }

  ngOnInit() {
    this.filters = initialFilters;
  }

  public applyFilter(filterValue) {
    this.activeFilter = filterValue;
    console.log(this.activeFilter);
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  @Input() title: string = 'Liste des planètes'
  planets: any[]
  pageNumber: Number
  isSearch: boolean;
  currentPage: string;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.isSearch = false;
    this.fetchPlanets();
  }

  fetchPlanets(page = '1') {
    this.apiService.getPlanets(page)
      .pipe(
        take(1)
      )
      .subscribe(data => {
        this.planets = data.results;
        this.pageNumber = data.total_pages;
      })
  }

  onSearch(event: string) {
    if(event !== '') {
      this.isSearch = true
      this.apiService.searchPlanets(event).subscribe(data => {
        this.planets = data.results;
        this.pageNumber = data.total_pages;
      })
    } else {
      this.isSearch = false
      this.fetchPlanets()
    }
  }

  onPageChange(event: string) {
    if(!this.isSearch) {
      this.currentPage = event
      this.fetchPlanets(event)
    }
  }

}

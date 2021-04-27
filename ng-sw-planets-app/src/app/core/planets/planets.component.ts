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
  pageNumber: number
  isSearch: boolean
  search: string
  currentPage: string
  resultPerPage: number = 10

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.isSearch = false
    this.search = ''
    this.currentPage = '1'
    this.fetchPlanets();
  }

  fetchPlanets(page = '1') {
    this.apiService.getPlanets(page)
      .pipe(
        take(1)
      )
      .subscribe(response => {
        this.planets = response.body
        this.pageNumber = Math.round(parseInt(response.headers.get('X-Total-Count')) / this.resultPerPage)
      })
  }

  onSearch(event: string) {
    if(event !== '') {
      this.isSearch = true
      this.search = event
      this.apiService.searchPlanets(this.search, parseInt(this.currentPage)).subscribe(response => {
        this.planets = response.body
        this.pageNumber = Math.round(parseInt(response.headers.get('X-Total-Count')) / this.resultPerPage)
      })
    } else {
      this.isSearch = false
      this.search = ''
      this.fetchPlanets()
    }
  }

  onPageChange(event: string) {
    this.currentPage = event
    if(!this.isSearch) {
      this.fetchPlanets(event)
    } else {
      this.onSearch(this.search)
    }
  }

}

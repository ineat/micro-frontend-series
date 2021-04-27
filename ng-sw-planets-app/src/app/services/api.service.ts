import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planet } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPlanets(page: String) {
    return this.httpClient.get<Planet[]>(`http://localhost:3010/planet?_page=${page}&_limit=10`, {observe: 'response'});
  }

  searchPlanets(search: String, page: number) {
    return this.httpClient.get<Planet[]>(`http://localhost:3010/planet?q=${search}&_page=${page}&_limit=10`, {observe: 'response'});
  }
}

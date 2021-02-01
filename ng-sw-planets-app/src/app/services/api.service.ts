import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getPlanets(page: String) {
    return this.httpClient.get<ApiResponse>(`https://ilab-swapi-api.azurewebsites.net/api/planets?page=${page}&limit=10`);
  }

  searchPlanets(search: String) {
    return this.httpClient.get<ApiResponse>(`https://ilab-swapi-api.azurewebsites.net/api/planets/search?name=${search}`);
  }
}

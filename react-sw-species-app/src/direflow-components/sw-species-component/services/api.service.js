// api.service.js

export function getSpecies(page) {
  return fetch(`https://ilab-swapi-api.azurewebsites.net/api/species?page=${page}&limit=10`);
}

export function searchSpecies(search, page = 1) {
  return fetch(`https://ilab-swapi-api.azurewebsites.net/api/species/search?name=${search}&page=${page}&limit=10`);
}
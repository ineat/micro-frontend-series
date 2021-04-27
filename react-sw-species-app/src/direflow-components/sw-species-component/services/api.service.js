// api.service.js

export function getSpecies(page) {
  return fetch(`http://localhost:3010/specie?_page=${page}&_limit=10`);
}

export function searchSpecies(search, page = 1) {
  return fetch(`http://localhost:3010/specie?q=${search}&_page=${page}&_limit=10`);
}
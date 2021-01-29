export default class ApiService {
  constructor() {}

  getCharacters(page) {
    return fetch(`https://www.swapi.tech/api/people?page=${page}&limit=10`);
  }

  searchCharacters(search) {
    return fetch(`https://www.swapi.tech/api/people/?name=${search}`);
  }
}
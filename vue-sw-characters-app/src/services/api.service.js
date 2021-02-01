export default class ApiService {
  constructor() {}

  getCharacters(page) {
    return fetch(`https://localhost:7071/api/peoples?page=${page}&limit=10`);
  }

  searchCharacters(search) {
    return fetch(`https://www.swapi.tech/api/people/?name=${search}`);
  }
}
export default class ApiService {
  constructor() {}

  getCharacters(page) {
    return fetch(`http://localhost:3010/people?_page=${page}&_limit=10`);
  }

  searchCharacters(search, page) {
    return fetch(`http://localhost:3010/people?q=${search}&_page=${page}&_limit=10`);
  }
}
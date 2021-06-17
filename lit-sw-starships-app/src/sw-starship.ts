import {LitElement, css, html} from 'lit'
import {customElement, property, state} from 'lit/decorators.js'

import './components/search'
import './components/starship'
import './components/pagination'

@customElement('sw-starship')
export class SwStarship extends LitElement {

  static styles = css`
    h1 {
      display: block;
      width: 100%;
      text-align: center;
    }
  `

  @property({type: String}) title = 'Liste des vaisseaux'
  @property({type: Array}) starships = []
  @property({type: String}) pageNumber = ''
  @property({type: String}) search = ''
  @state() resultPerPage: number = 10

  constructor() {
    super()
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <search-component
        @on-search="${this._onSearch}"
        @on-clear="${this._onClear}"
      ></search-component>
      ${this.starships.map(item =>
        html`
          <starship-tile-component .starship=${item}></starship-tile-component>
        `)
      }
      <pagination-component 
        @on-paginate="${this._onPaginate}"
        .pageNumber=${this.pageNumber}
      ></pagination-component>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this._getStarship()
  }

  async _getStarship(page = 1) {
    const response = await fetch(`http://localhost:3010/starship?_page=${page}&_limit=${this.resultPerPage}`);
    const totalItems: string = response.headers.get('X-Total-Count') as string
    const data = await response.json();
    this.starships = data;
    this.pageNumber = `${Math.round(parseInt(totalItems) / this.resultPerPage)}`;
  }

  async _searchStarship(page = 1) {
    const response = await fetch(`http://localhost:3010/starship?q=${this.search}&_page=${page}&_limit=${this.resultPerPage}`);
    const totalItems: string = response.headers.get('X-Total-Count') as string
    const data = await response.json();
    this.starships = data;
    this.pageNumber = `${Math.round(parseInt(totalItems) / this.resultPerPage)}`;
  }

  _onPaginate(event: any) {
    if(this.search !== null) {
      this._searchStarship(event.detail.pageIndex);
    } else {
      this._getStarship(event.detail.pageIndex)
    }
  }

  _onSearch(event: any) {
    this.search = event.detail.searchValue
    this._searchStarship();
  }

  _onClear() {
    this.search = '';
    this._getStarship();
  }

}

import {LitElement, css, html} from 'lit'
import {customElement, property} from 'lit/decorators.js'

@customElement('search-component')
export class SearchComponent extends LitElement {

  static styles = css`
    .sw-search {
        display: flex;
        flex-direction: row;
        width: 100%;
      }

      .sw-search button {
        min-width: 6rem;
        margin-left: 1rem;
        border: 1px solid rgba(darkred, 0.7);
        background: darkred;
        color: #fff;
      }

      .sw-search button.btn-clear {
        border: 1px solid rgba(grey, 0.7);
        background: lightgrey;
        color: grey;
      }
      
      .sw-search input {
        width: 100%;
        height: 35px;
        padding-left: 1rem;
        border: 1px solid #eee;
        background: #fafafa;
        font-size: 1.125rem;
        
      }
  `

  @property({ type: String, attribute: false }) searchValue = ''

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="sw-search">
        <input type="text"
          .value="${this.searchValue}"
          @change="${this._updateSearchValue}"/>
        ${this.searchValue !== '' ?
          html`
            <button class="btn-clear ${this.searchValue === '' ? 'hide': ''}" @click="${this._handleClear}">
              Clear
            </button>
          ` : ''
        }
        <button @click="${this._handleSearch}">
          Search
        </button>
      </div>
    `
  }

  // Méthode de mise a jour de la prop searchValue
  _updateSearchValue(event: any) {
    this.searchValue = event.target.value
  }

  // Méthode permettant l'émission d'un évènement lors du clic sur le bouton Search
  _handleSearch() {
    let event = new CustomEvent('on-search', {
      detail: {
        searchValue: this.searchValue
      }
    });
    this.dispatchEvent(event);
  }

  // Méthode permettant l'émission d'un évènement lors du clic sur le bouton Clear
  _handleClear() {
    this.searchValue = '';
    let event = new CustomEvent('on-clear', {
      detail: {
        searchValue: this.searchValue
      }
    });
    this.dispatchEvent(event);
  }

}

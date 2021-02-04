import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement('pagination-component')
export class PaginationComponent extends LitElement {

  static styles = css`
    .pagination-wrapper {
      display: flex;
      flex-direction: row-reverse;
      padding: 1rem 0
    }
    
    .pagination-wrapper ul {
      display:flex;
      margin: 0;
      padding: 0;
      flex-direction: row;
      align-items: center;
    }
    
    .pagination-wrapper ul li {
      list-style: none;
      padding: 0.25rem .5rem;
      margin: 0 0.125rem;
      border: 1px solid #fff;
      cursor: pointer;
    }
    
    .pagination-wrapper ul li:hover {
      color: #fff;
      background: rgba(255, 34, 0, 0.5);
      border: 1px solid rgba(255, 34, 0, 0.5);
    }
    
    .pagination-wrapper ul li.current {
      border: 1px solid darkred;
      cursor: default;
      color: #fff;
      background: darkred;
    }
  `

  @property({ type: String, attribute: true }) pageNumber = '1'
  @property({ type: Number }) current = 1
  @property({ type: Array }) pages: any[] = []

  constructor() {
    super()
  }

  render() {
    return html`
      <div class="pagination-wrapper">
        <ul>
          ${this.pages.map(item =>
            html`
              <li
                class="pagination-item ${this.current === item.id ? 'current': ''}"
                @click="${() => {this._handleClick(item.id)}}">
                <span>${item.text}</span>
              </li>
            `)
          }
        </ul>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback()
    this._createPagination();
  }

  performUpdate() {
    this._createPagination();
    super.performUpdate()
  }

  _createPagination() {
    this.pages = [];
    for(let i = 1; i <= parseInt(this.pageNumber); i++) {
      this.pages = [...this.pages, {id: i, text: i }]
    }
  }

  _handleClick(pageIndex: number) {
    this.current = pageIndex;
    let event = new CustomEvent('on-paginate', {
      detail: {
        pageIndex: pageIndex
      }
    });
    this.dispatchEvent(event);
  }
}
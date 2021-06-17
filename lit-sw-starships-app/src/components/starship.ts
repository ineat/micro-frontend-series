import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

type Starship = {
  name: String;
}

@customElement('starship-tile-component')
export class StarshipTileComponent extends LitElement {
  
  static styles = css`
    li {
      list-style: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 2rem;
      border-bottom: 1px solid #efefef;
    }

    li > span {
        font-size: 1.2rem;
        font-weight: 500;
    }

    li > .btn {
      background: firebrick;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
      border: 1px solid firebrick
    }
  `

  @property({ type: Object })
  starship = { name: ''}

  constructor() {
    super()
  }

  render() {
    return html`
      <li>
        <span>${this.starship.name}</span>
        <a class="btn btn-primary">Details</a>
      </li>
    `
  }
}

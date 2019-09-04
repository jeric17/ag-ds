import { LitElement, html, customElement, css } from 'lit-element';

@customElement('ag-button')
export class Button extends LitElement {

  static get styles() {
    return css`
      button {
        background-color: var(--primary-color);
        border: none;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        padding: 1em 2.5em;
        transition: background-color 0.3s ease-in;
      }

      button:hover {
        background-color: var(--primary-dark-color);
      }
    `;
  }

  render() {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

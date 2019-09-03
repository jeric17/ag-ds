import { LitElement, html, customElement, property } from 'lit-element';

@customElement('ag-button')
export class Button extends LitElement {

  @property({ type: String, reflect: true }) color = '';

  render() {
    return html`
      <button class="${this.color}">
        <slot></slot>
      </button>
    `;
  }
}

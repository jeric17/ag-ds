import { LitElement, html, customElement } from 'lit-element';

@customElement('ag-button')
export class Button extends LitElement {
  render() {
    return html`
      <button>FOOBAR</button>
    `;
  }
}

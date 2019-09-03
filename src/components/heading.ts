import { LitElement, html, customElement } from 'lit-element';

@customElement('ag-heading')
export class Heading extends LitElement {
  render() {
    return html`
      <h1></h1>
    `;
  }
}

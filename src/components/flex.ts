import { LitElement, html, customElement, property } from 'lit-element';

@customElement('ag-flex')
export class Flex extends LitElement {

  @property({ type: String }) justify: string;

  connectedCallback() {
    const data = [{
      k: 'justify',
      v: this.justify
    }];

    const mapped = data.filter(d => d.v).map(({ k, v }) => `${k}-${v}`);
    this.classList.add(...mapped);
  }

  render() {

    return html`
      <slot></slot>
    `;
  }
}

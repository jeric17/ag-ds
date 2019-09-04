import { LitElement, html, customElement, property, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-flex')
export class Flex extends LitElement {

  @property({ type: String }) direction: string;
  @property({ type: String }) items: string;
  @property({ type: String }) justify: string;
  @property({ type: Boolean }) padded: boolean;

  static get styles(): CSSResult {
    return css`
      :host {
        box-sizing: border-box;
        display: flex;
      }
      .justify-between {
        justify-content: space-between;
      }
      .justify-stretch {
        justify-content: stretch;
      }
      .justify-center {
        justify-content: center;
      }
      .justify-end {
        justify-content: end;
      }
      .items-center {
        align-items: center;
      }
      .items-stretch {
        align-items: stretch;
      }
      .items-end {
        align-items: center;
      }
      .direction-column {
        flex-direction: column;
      }
      .direction-row-reverse {
        flex-direction: row-reverse;
      }
      .direction-column-reverse {
        flex-direction: column-reverse;
      }
      .padded {
        padding: 1em;
      }
    `;
  }

  connectedCallback() {
    const data = [{
      k: 'justify',
      v: this.justify
    }, {
      k: 'items',
      v: this.items
    }, {
      k: 'direction',
      v: this.direction
    }];

    const mapped = data.filter(d => d.v).map(({ k, v }) => `${k}-${v}`);
    this.classList.add(...mapped);
    if (this.padded) {
      this.classList.add('padded');
    }
  }

  render(): TemplateResult {

    return html`
      <slot></slot>
    `;
  }
}

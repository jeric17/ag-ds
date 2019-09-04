import { LitElement, html, customElement, property, css, unsafeCSS, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-flex')
export class Flex extends LitElement {

  @property({ type: String }) direction: string;
  @property({ type: String }) items: string;
  @property({ type: String }) smallDirection: string;
  @property({ type: String }) smallItems: string;
  @property({ type: String }) smallJustify: string;
  @property({ type: String }) justify: string;
  @property({ type: Boolean }) padded: boolean;

  static get styles(): CSSResult {

    return css`
      :host {
        box-sizing: border-box;
        display: flex;
      }
      :host(.justify-between) {
        justify-content: space-between;
      }
      :host(.justify-stretch) {
        justify-content: stretch;
      }
      :host(.justify-center) {
        justify-content: center;
      }
      :host(.justify-end) {
        justify-content: end;
      }
      :host(.items-center) {
        align-items: center;
      }
      :host(.items-stretch) {
        align-items: stretch;
      }
      :host(.items-end) {
        align-items: center;
      }
      :host(.direction-column) {
        flex-direction: column;
      }
      :host(.direction-row-reverse) {
        flex-direction: row-reverse;
      }
      :host(.direction-column-reverse) {
        flex-direction: column-reverse;
      }
      :host(.padded) {
        padding: 1em;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
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
      <style>
        @media (max-width: 800px) and (orientation: portrait){
          :host {
            align-items: ${unsafeCSS(this.smallItems ? this.smallItems : this.items || 'flex-start')};
            flex-direction: ${unsafeCSS(this.smallDirection ? this.smallDirection : this.direction || 'row')};
            justify-content: ${unsafeCSS(this.smallJustify ? this.smallJustify : this.justify || 'flex-start')};
          }
        }
      </style>
      <slot></slot>
    `;
  }
}

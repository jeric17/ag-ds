import { LitElement, html, customElement, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-carousel-control')
export class CarouselControl extends LitElement {

  static get styles(): CSSResult {
    return css`
`;
  }

  handleControlEvent(target: string) {
    const evt = new CustomEvent(`ag-${target}`, {
      composed: true,
      bubbles: true
    });
    this.dispatchEvent(evt);
  }

  render(): TemplateResult {
    return html`
      <div class="root">
        <div class="previous" @click="${this.handleControlEvent.bind(this, 'previous')}"></div>
        <div class="next" @click="${this.handleControlEvent.bind(this, 'next')}"></div>
      </div>
    `;
  }
}

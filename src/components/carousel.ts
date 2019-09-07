import { LitElement, html, customElement, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-carousel')
export class Carousel extends LitElement {

  static get styles(): CSSResult {
    return css`
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="root"><slot></slot></div>
    `;
  }
}

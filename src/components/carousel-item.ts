import { LitElement, html, customElement, css, CSSResult, TemplateResult, property } from 'lit-element';

@customElement('ag-carousel-item')
export class CarouselItem extends LitElement {

  @property({ type: String }) imageUrl: string;

  static get styles(): CSSResult {
    return css`
      :host, .root {
        height: 100%;
        min-width: 100vw;
        width: 100%;
      }
      .root {
        align-items: center;
        background-size: cover;
        background-position: center;
        display: flex;
        justify-content: center;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render(): TemplateResult {
    return html`
      <div class="root" style="background-image: url(${this.imageUrl})">
        <slot></slot>
      </div>
    `;
  }
}

import { LitElement, html, customElement, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-carousel-control')
export class CarouselControl extends LitElement {

  static get styles(): CSSResult {
    return css`
      :host {
        align-items: center;
        display: flex;
        height: 100%;
        position: absolute;
        width: 100%;
      }
      .root {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 0 1em;
        width: 100%;
      }
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
        <div class="previous" @click="${this.handleControlEvent.bind(this, 'previous')}">&lt;</div>
        <div class="next" @click="${this.handleControlEvent.bind(this, 'next')}">&gt;</div>
      </div>
    `;
  }
}

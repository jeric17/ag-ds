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
        z-index: 1;
      }
      .root {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      .control {
        align-items: center;
        background-color: rgba(23, 23, 23, 0.5);
        cursor: pointer;
        display: flex;
        height: 53px;
        justify-content: center;
        width: 47px;
        transition: background-color 0.3s;
      }
      .control:hover {
        background-color: #1a1a1a;
      }
      .control:hover svg {
        transform: scale(0.85);
      }
      svg {
        transform: scale(1);
        transition: all 0.3s;
        width: 15px;
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
        <div class="control previous" @click="${this.handleControlEvent.bind(this, 'previous')}">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.06 129.4"><defs><style>.cls-1{fill:none;stroke:silver;stroke-miterlimit:10;stroke-width:9px;}</style></defs><title>chevron</title><polyline class="cls-1" points="67.88 126.22 6.36 64.7 67.88 3.18"/></svg>
        </div>
        <div class="control next" @click="${this.handleControlEvent.bind(this, 'next')}">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.06 129.4"><defs><style>.cls-1{fill:none;stroke:silver;stroke-miterlimit:10;stroke-width:9px;}</style></defs><title>rightchevron</title><polyline class="cls-1" points="3.18 3.18 64.7 64.7 3.18 126.22"/></svg>
        </div>
      </div>
    `;
  }
}

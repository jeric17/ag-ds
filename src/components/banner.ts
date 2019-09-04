import { LitElement, html, customElement, css, unsafeCSS, CSSResult, TemplateResult, property } from 'lit-element';

@customElement('ag-banner')
export class Banner extends LitElement {

  @property({ type: String }) imageSrc: string;
  @property({ type: String }) height: string = '500px';
  @property({ type: String }) smallHeight: string = '300px';

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        width: 100%;
      }
      .root {
        background-position: center;
        background-size: cover;
        height: 100%;
        width: 100%;
      }
    `;
  }

  render(): TemplateResult {

    return html`
      <style>
        :host {
          height: ${this.height}
        }
        @media (max-width: 800px) and (orientation: portrait) {
          :host {
            height: ${unsafeCSS(this.smallHeight ? this.smallHeight : this.height)}
          }
        }
      </style>
      <div class="root" style="background-image:url(${this.imageSrc})">
        <slot></slot>
      </div>
    `;
  }
}

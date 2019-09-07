import { LitElement, html, customElement, css, CSSResult, TemplateResult, property } from 'lit-element';

@customElement('ag-image')
export class Image extends LitElement {

  @property({ type: String }) imageUrl: string;
  @property({ type: String }) imageWidth: string;

  static get styles(): CSSResult {
    return css`
      img {
        display: block;
        height: auto;
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <img src="${this.imageUrl}" width="${this.imageWidth}"/>
    `;
  }
}

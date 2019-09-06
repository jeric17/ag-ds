import { LitElement, html, customElement, property, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-divider')
export class Divider extends LitElement {

  @property({ type: Boolean }) vertical: boolean;
  @property({ type: String }) width: string;
  @property({ type: String }) height = '8px';

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
        width: 100%;
      }
      :host(.vertical) {
        width: 8px;
      }
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.vertical) {
      this.classList.add('vertical');
    }
    if (this.height) {
      this.style.height = this.height;
    }
    if (this.width) {
      this.style.width = this.width;
    }
  }

  render(): TemplateResult {

    return html`
      <div class="root"></div>
    `;
  }
}

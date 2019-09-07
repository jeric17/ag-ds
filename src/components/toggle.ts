import { LitElement, html, customElement, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-toggle')
export class Toggle extends LitElement {

  static get styles(): CSSResult {
    return css``;
  }

  render(): TemplateResult {
    return html`
      <div class="root"></div>
    `
  }
}

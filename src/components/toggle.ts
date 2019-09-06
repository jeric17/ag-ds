import { LitElement, html, customElement, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-toggle')
export class Toggle extends LitElement {

  static get styles(): CSSResult {
    return css``;
  }

  connectedCallback() {
    console.log('yes yes yes ', window['foo']);
    if (window['foo']) {
      console.log('has foo');
    }
    super.connectedCallback();
  }

  createRenderRoot() {
    return this;
  }

  render(): TemplateResult {
    return html`
      <div class="root"></div>
    `
  }
}

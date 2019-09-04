import { LitElement, html, customElement, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-heading')
export class Heading extends LitElement {

  static get styles(): CSSResult {
    return css`
      .root {
        display: flex;
        flex-direction: column;
      }
      .line {
        background-color: var(--primary-color);
        height: 4px;
        width: 60px;
      }
    `;
  }

  render(): TemplateResult {

    return html`
      <div class="root">
        <slot></slot>
        <div class="line"></div>
      </div>
    `;
  }
}

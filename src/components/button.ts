import { LitElement, html, customElement, css, CSSResult, TemplateResult } from 'lit-element';

@customElement('ag-button')
export class Button extends LitElement {

  static get styles(): CSSResult {
    return css`
      button {
        background-color: var(--primary-color);
        border: none;
        box-sizing: border-box;
        color: #fff;
        cursor: pointer;
        font-family: var(--font-family);
        padding: 1em 2.5em;
        outline: none;
        transition: background-color 0.3s ease-in;
      }

      button:hover {
        background-color: var(--primary-dark-color);
      }
    `;
  }

  render(): TemplateResult {
    return html`
      <button>
        <slot></slot>
      </button>
    `;
  }
}

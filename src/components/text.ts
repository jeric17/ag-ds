import { LitElement, html, customElement, css, property, TemplateResult, CSSResult } from 'lit-element';
import { cx } from '../utils';

@customElement('ag-text')
export class Text extends LitElement {

  @property({ type: Boolean }) primary: string;
  @property({ type: Boolean }) strong: string;
  @property({ type: String }) tag: string = 'p';

  static get styles(): CSSResult {
    return css`
    .root {
      font-family: var(--font-family);
      color: var(--default-text-color);
      font-weight: normal;
    }
    .primary {
      color: var(--primary-color);
    }
    .secondary {
      color: var(--secondary-color);
    }
    .success {
      color: var(--success-color);
    }
    .warning {
      color: var(--warning-color);
    }
    .strong {
      font-weight: bold;
    }
    .subtle {
      color: var(--light-color);
    }
    `;
  }

  get cx() {
    return cx({
      primary: Boolean(this.primary),
      strong: Boolean(this.strong)
    });
  }

  render(): TemplateResult {
    return html`
    <span class="root ${this.cx}">
      <slot></slot>
    </span>
  `;
  }
}

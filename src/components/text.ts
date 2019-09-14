import { LitElement, html, customElement, css, property, TemplateResult, CSSResult } from 'lit-element';
import { cx } from '../utils';

@customElement('ag-text')
export class Text extends LitElement {

  @property({ type: Boolean }) primary: boolean;
  @property({ type: Boolean }) italic: boolean;
  @property({ type: Boolean }) light: boolean;
  @property({ type: Boolean }) success: boolean;
  @property({ type: Boolean }) secondary: boolean;
  @property({ type: Boolean }) warning: boolean;
  @property({ type: Boolean }) strong: boolean;
  @property({ type: Boolean }) nowrap: boolean;
  @property({ type: Boolean }) thin: boolean;
  @property({ type: String }) tag: string = 'p';
  @property({ type: String }) textAlign: string;

  static get styles(): CSSResult {
    return css`
    .root {
      font-family: var(--font-family);
      color: var(--default-text-color);
      font-weight: var(--font-weight, 300);
      transition: color 0.3s;
    }
    .primary {
      color: var(--primary-color);
    }
    .secondary {
      color: var(--secondary-color);
    }
    .light {
      color: var(--light-text-color);
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
    .p {
      line-height: 32px;
    }
    .nowrap {
      white-space: nowrap;
    }
    .center {
      text-align: center;
    }
    .right {
      text-align: right;
    }
    .thin {
      font-weight: 200;
    }
    .italic {
      font-style: italic;
    }
    `;
  }

  get cx() {
    return cx({
      primary: this.primary,
      secondary: this.secondary,
      italic: this.italic,
      light: this.light,
      warning: this.warning,
      thin: this.thin,
      success: this.success,
      strong: Boolean(this.strong),
      nowrap: this.nowrap,
      center: this.textAlign === 'center',
      right: this.textAlign === 'right',
      p: this.tag === 'p',
      h: this.tag === 'h'
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

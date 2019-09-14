import { LitElement, html, customElement, property, css, CSSResult, TemplateResult } from 'lit-element';
import { cx } from '../utils';

@customElement('ag-link')
export class Link extends LitElement {

  @property({ type: Boolean }) active: boolean;
  @property({ type: String }) activeLink: string;
  @property({ type: Boolean }) noLine: boolean;

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
      }
      .root {
        cursor: pointer;
        display: flex;
        flex-direction: column;
      }
      .root:hover {
        --default-text-color: var(--primary-color);
      }
      .line {
        background-color: transparent;
        height: 2px;
        width: 100%;
      }
      .active {
        background-color: var(--primary-color);
      }
      .noLine .line {
        display: none;
      }
    `;
  }

  connectedCallback() {
    const isActive = this.activeLink && window.location.pathname.match(this.activeLink);
    if (isActive && isActive.index === 0) {
      this.active = true;
    }
    super.connectedCallback();
  }

  get cls() {
    return cx({
      root: true,
      noLine: this.noLine
    });
  }

  render(): TemplateResult {
    return html`
      <div class="${this.cls}">
        <ag-text ?primary="${this.active}" nowrap>
          <slot></slot>
        </ag-text>
        <div class="line${this.active ? ' active': ''}"></div>
      </div>
    `
  }
}

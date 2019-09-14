import { LitElement, html, customElement, css, CSSResult, TemplateResult, property } from 'lit-element';
import { cx } from '../utils';

@customElement('ag-toggle')
export class Toggle extends LitElement {

  @property({ type: String }) buttonText = 'READ MORE';
  @property({ type: String }) buttonToggleText = 'READ LESS';
  @property({ type: Boolean }) show = false;

  static get styles(): CSSResult {
    return css`
      .root {
        display: flex;
        flex-direction: column;
      }
      .content {
        display: none;
      }
      .show .content {
        display: block;
      }
    `;
  }

  get cls() {
    return cx({
      root: true,
      show: this.show
    });
  }

  toggle() {
    this.show = !this.show;
  }

  render(): TemplateResult {
    return html`
      <div class="${this.cls}">
        <div class="content">
          <slot></slot>
        </div>
        <ag-divider></ag-divider>
        <ag-button @click="${this.toggle}">${this.show ? this.buttonToggleText : this.buttonText}</ag-button>
      </div>
    `
  }
}

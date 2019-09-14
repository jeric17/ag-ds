import { LitElement, html, customElement, css, CSSResult, TemplateResult, property } from 'lit-element';
import { cx } from '../utils';

@customElement('ag-list-item')
export class ListItem extends LitElement {

  @property({ type: String }) color: string;

  static get styles(): CSSResult {
    return css`
      .root {
        display: flex;
      }
      .svg-icon {
        fill: var(--primary-color);
        margin-right: 16px;
        width: 16px;
        min-width: 16px;
      }
      .secondary .svg-icon {
        fill: var(--secondary-color);
      }
      .warning .svg-icon{
        fill: var(--warning-color);
      }
      .success .svg-icon {
        fill: var(--success-color);
      }
    `;
  }

  get cls() {
    return cx({
      root: true,
      secondary: this.color === 'secondary',
      warning: this.color === 'warning',
      success: this.color === 'success'
    });
  }

  render(): TemplateResult {

    return html`
      <div class="root ${this.cls}">
        <svg class="svg-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.31 34.99"><path d="M46.63,1.6h0a3.49,3.49,0,0,0-5,0L17.29,26a1,1,0,0,1-1.43,0L6.32,16.45a3.49,3.49,0,0,0-4.95,0h0a3.51,3.51,0,0,0,0,4.95L14.81,34.84a2.5,2.5,0,0,0,3.53,0L46.63,6.55A3.51,3.51,0,0,0,46.63,1.6Z" transform="translate(-0.35 -0.58)"/></svg>
        <slot></slot>
      </div>
    `;
  }
}

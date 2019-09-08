import { LitElement, html, customElement, css, CSSResult, TemplateResult, property } from 'lit-element';
import { cx } from '../utils';

@customElement('ag-card')
export class Card extends LitElement {

  @property({ type: Boolean }) dark: boolean;
  @property({ type: Boolean }) padded: boolean;

  static get styles(): CSSResult {
    return css`
      .root {
        background-color: #1a1a1a;
        opacity: 0.85;
        box-sizing: border-box;
      }
      .padded {
        padding: 2em;
      }
    `;
  }

  get cls() {
    return cx({
      dark: this.dark,
      padded: this.padded
    });
  }

  render(): TemplateResult {

    return html`
      <div class="root ${this.cls}">
        <slot></slot>
      </div>
    `;
  }
}

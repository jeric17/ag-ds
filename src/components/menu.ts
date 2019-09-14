import { LitElement, html, customElement, css, CSSResult, TemplateResult, property } from 'lit-element';
import { cx } from '../utils';

@customElement('ag-menu')
export class Menu extends LitElement {

  @property({ type: Boolean}) show = false;
  @property({ type: Boolean}) removing = false;

  static get styles(): CSSResult {
    return css`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.9);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .show .menuList {
        display: block;
      }
      .menuList {
        animation-name: fadeIn;
        animation-duration: 0.3s;
        background-color: var(--menu-bg, rgba(26, 26, 26, 0.95));
        border: 1px solid rgba(165, 255, 135, 0.2);
        border-radius: var(--radius, 2px);
        box-sizing: border-box;
        display: none;
        position: absolute;
        padding: 1em;
        transform-origin: center;
        transition: all 0.3s;
      }
      .removing {
        opacity: 0;
        transform: scale(0.9);
      }
    `;
  }

  get cls() {
    return cx({
      root: true,
      show: this.show
    });
  }

  get menuListCls() {
    return cx({
      menuList: true,
      removing: this.removing
    });
  }

  hover() {
    if (this.removing || this.show) {
      return false;
    }
    this.show = true;
  }

  blur() {
    if (this.removing || !this.show) {
      return false;
    }
    this.removing = true;
    setTimeout(() => {
      this.show = false;
      this.removing = false;
    }, 300);
  }

  render(): TemplateResult {

    return html`
      <div class="${this.cls}" @mouseover="${this.hover}" @mouseleave="${this.blur}">
        <div class="menu"><slot name="menu"></slot></div>
        <div class="menuListWrapper">
          <div @click="${this.blur}" class="${this.menuListCls}"><slot name="menu-list"></slot></div>
        </div>
      </div>
    `;
  }
}

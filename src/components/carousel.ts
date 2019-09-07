import { LitElement, html, customElement, css, CSSResult, TemplateResult, property } from 'lit-element';

@customElement('ag-carousel')
export class Carousel extends LitElement {

  resizing = false;
  to = null;

  @property({ type: Number }) interval = 4000;
  @property({ type: Number, reflect: true }) currentItem = 0;

  static get styles(): CSSResult {
    return css`
      :host {
        display: flex;
      }
      .root {
        display: flex;
        height: 100vh;
        width: 100%;
      }
      .content {
        display: flex;
        position: relative;
        transition: all 0.5s;
        left: 0px;
        width: 100vw;
      }
      ::slotted(.carousel-item) {
        min-width: 100vw;
      }
    `;
  }

  connectedCallback() {
    this.init();
    super.connectedCallback();
  }

  attributeChangedCallback(name: string, oldval: any, newval: any) {
    this.handleCurrentItem();
    super.attributeChangedCallback(name, oldval, newval);
  }

  init() {
    this.initListener();
    this.initInterval();
  }

  initInterval() {
    this.to = setTimeout(() => {
      this.next();
      this.initInterval();
    }, this.interval);
  }

  initListener() {
    window.addEventListener('resize', () => {
      if (this.resizing) {
        return false;
      }
      this.resizing = true;
      setTimeout(() => {
        this.handleCurrentItem();
        this.resizing = false;
      }, 100);
    });
  }

  handleCurrentItem() {
    const root: HTMLElement = this.shadowRoot.querySelector('.content');
    if (!root) {
      return false;
    }
    const pos = this.currentItem * window.outerWidth;
    root.style.left = `-${pos}px`;
  }

  onPrevious() {
    clearTimeout(this.to);
    if (this.currentItem === 0) {
      this.currentItem = this.children.length - 1;
    } else {
      this.currentItem -= 1;
    }
    this.initInterval();
  }

  onNext() {
    clearTimeout(this.to);
    this.initInterval();
    this.next();
  }

  next() {
    if (this.currentItem === this.children.length - 1) {
      this.currentItem = 0;
    } else {
      this.currentItem += 1;
    }
  }

  render(): TemplateResult {
    return html`
      <div class="root">
        <ag-carousel-control
          @ag-next="${this.onNext}"
          @ag-previous="${this.onPrevious}"
        ></ag-carousel-control>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

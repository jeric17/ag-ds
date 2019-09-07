import { LitElement, html, customElement, css, CSSResult, TemplateResult, property } from 'lit-element';

@customElement('ag-carousel')
export class Carousel extends LitElement {

  @property({ type: Number, reflect: true }) currentItem = 0;

  static get styles(): CSSResult {
    return css`
      :host {
        display: block;
      }
      .root {
        height: 100vh;
        position: relative;
        width: 100%;
      }
      ::slotted(.carousel-item) {
        display: none;
      }
      ::slotted(.active) {
        display: block;
      }
    `;
  }

  connectedCallback() {
    this.handleCurrentItem();
    super.connectedCallback();
  }

  attributeChangedCallback(name: string, oldval: any, newval: any) {
    this.handleCurrentItem();
    super.attributeChangedCallback(name, oldval, newval);
  }

  handleCurrentItem() {
    Array.from(this.children).forEach((d, i) => {
      d.classList.add('carousel-item');
      d.classList.remove('active');
      if (i === this.currentItem) {
        d.classList.toggle('active');
      }
    });
  }

  onPrevious() {
    if (this.currentItem === 0) {
      this.currentItem = this.children.length - 1;
    } else {
      this.currentItem -= 1;
    }
  }

  onNext() {
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
        <slot></slot>
      </div>
    `;
  }
}

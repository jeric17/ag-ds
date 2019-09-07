import { generate, rm, select } from '../../testing/utils';

describe('Carousel', () => {
  let el: Element;
  const content = `
    <div class="bg1"></div>
    <div class="bg2"></div>
    <div class="bg3"></div>
  `;

  beforeEach(async () => {
    el = await generate('ag-carousel', {
      content
    });
  });

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    expect(el.shadowRoot).toBeTruthy();
  });

  it('should load contents', () => {
    expect(el.children.length).toBe(3);
    expect(el.children[0].classList.contains('active')).toBeTruthy();
    expect(el.children[1].classList.contains('active')).toBeFalsy();
  });

  it('should handle next', () => {
    const control = select(el, 'ag-carousel-control');
    control.dispatchEvent(new CustomEvent('ag-next', { composed: true, bubbles: true }));
    expect(el.getAttribute('currentItem')).toBe('1');
  });

  it('should handle previous');

});

import { generate, rm, select, tick } from '../../testing/utils';

describe('Carousel', () => {
  let el: Element;
  const content = `
    <div class="bg1"></div>
    <div class="bg2"></div>
    <div class="bg3"></div>
  `;

  beforeEach(async () => {
    el = await generate('ag-carousel', {
      content,
      props: [{
        key: 'currentItem',
        value: 0
      }]
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
  });

  it('should handle next', async () => {
    const control = select(el, 'ag-carousel-control');
    control.dispatchEvent(new CustomEvent('ag-next', { composed: true, bubbles: true }));
    await tick(100);
    expect(el.getAttribute('currentItem')).toBe('1');
  });

  it('should handle previous', async () => {
    const control = select(el, 'ag-carousel-control');
    control.dispatchEvent(new CustomEvent('ag-previous', { composed: true, bubbles: true }));
    await tick(100);
    expect(el.getAttribute('currentItem')).toBe('2');
  });

});

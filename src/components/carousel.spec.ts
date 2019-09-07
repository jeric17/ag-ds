import { generate, rm } from '../../testing/utils';

describe('Carousel', () => {
  let el: Element;
  const content = `
    <div></div>
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
    expect(el.children.length).toBe(1);
  });

  it('should handle next');

  it('should handle previous');

});

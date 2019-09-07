import { generate, rm, select } from '../../testing/utils';

describe('Image', () => {
  let el: Element;

  beforeEach(async () => {
    el = await generate('ag-image', {
      props: [{
        key: 'imageUrl',
        value: 'foo'
      }, {
        key: 'imageWidth',
        value: '100px'
      }]
    });
  });

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    expect(el).toBeTruthy();
  });

  it('@imageUrl should set the image', () => {
    const target: HTMLElement = select(el, 'img') as (HTMLElement);
    expect(target.getAttribute('src')).toBe('foo');
  });

  it('@imageWidth should set the width of the image', () => {
    const target: HTMLElement = select(el, 'img') as (HTMLElement);
    expect(target.getAttribute('width')).toBe('100px');
  });

});

import { generate, rm, select } from '../../testing/utils';

describe('CarouselItem', () => {
  let el: Element;

  beforeEach(async () => {
    const target = await generate('ag-carousel-item', {
      content: 'foo',
      props: [{
        key: 'imageUrl',
        value: 'myimage'
      }]
    });
    el = target;
  });

  afterEach(() => {
    rm(el);
  });

  it('should be created', () => {
    expect(el).toBeTruthy();
    expect(el['innerHTML']).toBe('foo');
  });

  it('@imageUrl should set the image url', () => {
    const target: HTMLElement = select(el, '.root') as HTMLElement;
    expect(target.style.backgroundImage).toBe('url("myimage")');
  });

});

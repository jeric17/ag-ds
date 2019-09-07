import { generate, rm, select, newEvent } from '../../testing/utils';

describe('CarouselControl', () => {
  let el: Element;

  beforeEach(async () => {
    el = await generate('ag-carousel-control');
  });

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    expect(el.shadowRoot).toBeTruthy();
  });

  it('should be able to dispatch next event', () => {
    const targetEl: any = select(el, '.next');
    const called = newEvent('ag-next', 'click', el, targetEl);
    expect(called).toBeTruthy();
  });

  it('should be able to dispatch previous event', () => {
    const targetEl: any = select(el, '.previous');
    const called = newEvent('ag-previous', 'click', el, targetEl);
    expect(called).toBeTruthy();
  });
});

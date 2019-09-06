import { generate, rm, select } from '../../testing/utils';

describe('Link', () => {
  let el: Element;

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    el = await generate('ag-link', {
      content: 'foo'
    });
    expect(el).toBeTruthy();
  });

  it('should render a link with content', async () => {
    el = await generate('ag-link', {
      content: 'foo'
    });
    expect(el['innerText']).toBe('foo');
  });

  it('@active should add an active class', async () => {
    el = await generate('ag-link', {
      content: 'active link',
      props: [{
        key: 'active',
        value: true
      }]
    });

    expect(el).toBeTruthy();
    const target = select(el, '.active');
    expect(target).toBeTruthy();
  });

});

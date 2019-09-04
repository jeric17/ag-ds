import { generate, rm, select } from '../../testing/utils';

describe('Card', () => {
  let el: Element;

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    el = await generate('ag-card', {
      content: 'foo'
    });
    expect(el).toBeTruthy();
    expect(el['innerHTML']).toBe('foo');
  });

  it('@dark should render dark class', async () => {
    el = await generate('ag-card', {
      props: [{
        key: 'dark',
        value: true
      }]
    });
    const target = select(el, '.root');
    expect(target.classList.contains('dark')).toBeTruthy();
  });

  it('@padded should render padded class', async () => {
    el = await generate('ag-card', {
      props: [{
        key: 'padded',
        value: true
      }]
    });
    const target = select(el, '.root');
    expect(target.classList.contains('padded')).toBeTruthy();
  });

});

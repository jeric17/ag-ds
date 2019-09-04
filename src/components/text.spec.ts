import { generate, rm, select } from '../../testing/utils';

describe('Text', () => {
  let el: Element;

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    el = await generate('ag-text');
    const target = select(el, 'span');
    expect(el).toBeTruthy();
    expect(target).toBeTruthy();
    expect(target.classList.contains('strong')).toBeFalsy();
    expect(target.classList.contains('primary')).toBeFalsy();
  });

  it('should render content', async () => {
    el = await generate('ag-text', {
      content: 'Hello World'
    });
    expect(el['innerText']).toBe('Hello World');
  });

  it('@strong should add strong class', async () => {
    el = await generate('ag-text', {
      props: [{
        key: 'strong',
        value: true
      }]
    });
    const target = select(el, 'span');
    expect(target.classList.contains('strong')).toBeTruthy();
  });

  it('@primary should add the primary class', async () => {
    el = await generate('ag-text', {
      props: [{
        key: 'primary',
        value: true
      }]
    });
    const target = select(el, 'span');
    expect(target.classList.contains('primary')).toBeTruthy();
  });
});

import { generate, rm, select } from '../../testing/utils';

describe('Button', () => {
  let el: Element;

  beforeEach(async () => {
    el = await generate('ag-button');
  });

  afterEach(() => {
    rm(el);
  });

  it('should be created', () => {
    expect(el).toBeTruthy();
  });

  it('should render a button with content', () => {
    let btn = select(el, 'button');
    expect(btn).toBeTruthy();
    el.innerHTML = 'foo';
    btn = select(el, 'button');
    expect(el['innerText']).toBe('foo');
  });

});

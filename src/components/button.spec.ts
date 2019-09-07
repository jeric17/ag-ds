import { generate, rm, select } from '../../testing/utils';
// import { Button } from './button';

describe('Button', () => {
  let el: Element;

  beforeEach(async () => {
    el = await generate('ag-button', {
      content: 'foo'
    });
  });

  afterEach(() => {
    rm(el);
  });

  it('should be created', () => {
    expect(el).toBeTruthy();
    // expect(Button.render).toBeTruthy();
  });

  it('should render a button with content', () => {
    const btn = select(el, 'button');
    expect(btn).toBeTruthy();
    expect(el['innerText']).toBe('foo');
  });

});

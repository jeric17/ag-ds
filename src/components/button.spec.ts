import { generate, rm, select, tick } from '../../testing/utils';

describe('Button', () => {
  let el: Element;

  beforeEach(async () => {
    el = await generate('ag-button');
    el.setAttribute('color', '');
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

  it('@color should add the correct class', async () => {
    el.setAttribute('color', 'primary');

    await tick();

    let btn = select(el, 'button');
    expect(btn.classList.contains('primary')).toBe(true);
  });

});

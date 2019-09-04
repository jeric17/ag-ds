import { generate, rm } from '../../testing/utils';

describe('Heading', () => {
  let el: Element;

  beforeEach(async () => {
    el = await generate('ag-heading', {
      content: 'foo'
    });
  });

  afterEach(() => {
    rm(el);
  });

  it('should be created', () => {
    expect(el).toBeTruthy();
  });

  it('should render with content', () => {
    expect(el['innerText']).toBe('foo');
  });

});

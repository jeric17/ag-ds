import { generate, rm, select } from '../../testing/utils';

describe('Banner', () => {
  let el: Element;

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    el = await generate('ag-banner', {
      content: 'foo'
    });
    expect(el).toBeTruthy();
  });

});

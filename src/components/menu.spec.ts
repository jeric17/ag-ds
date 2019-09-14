import { generate, rm } from '../../testing/utils';

describe('Menu', () => {
  let el: Element;

  beforeEach(async () => {
    el = await generate('ag-menu', {
      content: '<div slot="menu">foo</div><div slot="menu-list">bar</div>'
    });
  });

  afterEach(() => {
    rm(el);
  });

  it('should be created', () => {
    expect(el).toBeTruthy();

  });

});

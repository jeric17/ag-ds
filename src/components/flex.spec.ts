import { generate, rm, tick } from '../../testing/utils';

describe('Flex', () => {
  let el: Element;

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    el = await generate('ag-flex');
    expect(el).toBeTruthy();
  });

  it('@justify should add a class', async () => {
    el = await generate('ag-flex', [{
      key: 'justify',
      value: 'center'
    }]);
    tick();
    expect(el.classList.contains('justify-center')).toBeTruthy();
  });

});

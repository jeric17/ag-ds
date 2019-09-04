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
    el = await generate('ag-flex', {
      props: [{
        key: 'justify',
        value: 'center'
      }]
    });
    tick();
    expect(el.classList.contains('justify-center')).toBeTruthy();
  });

  it('@direction should add a class', async () => {
    el = await generate('ag-flex', {
      props: [{
        key: 'direction',
        value: 'row-reverse'
      }]
    });
    tick();
    expect(el.classList.contains('direction-row-reverse')).toBeTruthy();
  });

  it('@items should add a class', async () => {
    el = await generate('ag-flex', {
      props: [{
        key: 'items',
        value: 'center'
      }]
    });
    tick();
    expect(el.classList.contains('items-center')).toBeTruthy();
  });

  it('@ipadded should add a class', async () => {
    el = await generate('ag-flex', {
      props: [{
        key: 'padded',
        value: true
      }]
    });

    expect(el.classList.contains('padded')).toBeTruthy();
  });
});

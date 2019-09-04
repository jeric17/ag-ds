import { generate, rm } from '../../testing/utils';

describe('Divider', () => {
  let el: Element;

  afterEach(() => {
    rm(el);
  });

  it('should be created', async () => {
    el = await generate('ag-divider');
    expect(el).toBeTruthy();
  });

  it('@vertical should render vertical class', async () => {
    el = await generate('ag-divider', {
      props: [{
        key: 'vertical',
        value: true
      }]
    });
    expect(el.classList.contains('vertical')).toBeTruthy();
  });

  it('@width should add width style', async () => {
    el = await generate('ag-divider', {
      props: [{
        key: 'width',
        value: '4px'
      }]
    });
    expect(el['style'].getPropertyValue('width')).toBe('4px');
  });

  it('@height should add width style', async () => {
    el = await generate('ag-divider', {
      props: [{
        key: 'height',
        value: '4px'
      }]
    });
    expect(el['style'].getPropertyValue('height')).toBe('4px');
  });

});

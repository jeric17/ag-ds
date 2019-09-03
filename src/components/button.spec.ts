import { waitForComponentToRender } from '../../testing/utils';

describe('Button', () => {
  it('should be created', async () => {

    const btn = document.createElement('ag-button');
    document.body.append(btn);
    const btnEl = await waitForComponentToRender('ag-button');
    const sr = btnEl.shadowRoot;
    expect(sr).toBeTruthy();

    expect(sr.innerHTML).toBe('foobar');
  });
});

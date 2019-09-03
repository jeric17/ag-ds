describe('Button', () => {
  it('should be created', () => {
    const btn = document.createElement('ag-button');
    expect(btn.shadowRoot).toBeTruthy();
  });
});

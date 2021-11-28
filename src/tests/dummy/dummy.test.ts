describe('Dummy Test for Jest Core Validation', () => {
  test('Sum 1+1 Expect to be 2', () => {
    expect(1 + 1).toBe(2);
  });

  test('Sum 1+1 Expect to be not 3', () => {
    expect(1 + 1).not.toBe(3);
  });
});

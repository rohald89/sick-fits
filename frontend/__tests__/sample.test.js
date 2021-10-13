const add = (a, b) => {
  const aNum = parseInt(a);
  const bNum = parseInt(b);
  return aNum + bNum;
};

describe('Sample test 101', () => {
  it('works as expected', () => {
    // run our expect statements to see if our test will pass
    expect(1).toEqual(1);
    const age = 100;
    expect(age).toEqual(100);
  });
  it('runs the add function properly', () => {
    expect(add(1, 2)).toBeGreaterThanOrEqual(3);
  });
  it('adds two strings of numbers together', () => {
    expect(add('1', '2')).toBe(3);
  });
});

import formatMoney from '../lib/formatMoney';

describe('format Money function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(9)).toEqual('$0.09');
    expect(formatMoney(10)).toEqual('$0.10');
    expect(formatMoney(40)).toEqual('$0.40');
  });

  it('leaves off cents when its whole dollars', () => {
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(5000)).toEqual('$50');
    expect(formatMoney(50000000)).toEqual('$500,000');
  });

  it('works with whole and fractional dollars', () => {
    expect(formatMoney(140)).toEqual('$1.40');
    expect(formatMoney(1252)).toEqual('$12.52');
    expect(formatMoney(5012)).toEqual('$50.12');
    expect(formatMoney(23453456345)).toEqual('$234,534,563.45');
  });
});

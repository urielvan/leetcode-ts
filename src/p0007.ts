// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

function reverse(x: number): number {
  let abs = Math.abs(x);
  let result = 0;

  while (abs > 0) {
    result = (result * 10) + (abs % 10);
    abs = Math.trunc(abs / 10);
  }

  if (result > (2 ** 31 - 1)) {
    return 0;
  }

  return x > 0 ? result : -result;
}

describe('reverse', () => {
  it('reverse', () => {
    expect(reverse(123)).toBe(321);
  });

  it('reverse negative 1', () => {
    expect(reverse(-213)).toBe(-312);
  });

  it('reverse negative 2', () => {
    expect(reverse(-0)).toBe(-0);
  });

  it('reverse number ends with zero', () => {
    expect(reverse(1230)).toBe(321);
  });

  it('returns 0 when overflowed 1', () => {
    expect(reverse(1534236469)).toBe(0);
  });

  it('returns 0 when overflowed 2', () => {
    expect(reverse(-2147483648)).toBe(0);
  });
});

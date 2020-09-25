// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let num = x;
  let reversed = 0;

  while (num > 0) {
    reversed = (reversed * 10) + (num % 10);
    num = Math.trunc(num / 10);
  }

  return reversed === x;
}

describe('is palindrome', () => {
  it('always false when negative', () => {
    expect(isPalindrome(-121)).toBe(false);
  });

  it('works', () => {
    expect(isPalindrome(13531)).toBe(true);
    expect(isPalindrome(120)).toBe(false);
  });
});

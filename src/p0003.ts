// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

function lengthOfLongestSubstring(s: string): number {
  if (!s) {
    return 0;
  }

  let max = 1;
  let index = s.length - 1;
  let fragment = '';
  let charIndex: number;

  for (; index >= 0; index--) {
    charIndex = fragment.indexOf(s[index]);

    if (charIndex !== -1) {
      if (max < fragment.length) {
        max = fragment.length;
      }

      fragment = fragment.substr(0, charIndex);
    }

    fragment = s[index] + fragment;
  }

  return Math.max(max, fragment.length);
}

describe('length of longest substring', () => {
  it('returns 0 when empty', () => {
    expect(lengthOfLongestSubstring('')).toBe(0);
  });

  it('returns one 1', () => {
    expect(lengthOfLongestSubstring('x')).toBe(1);
  });

  it('returns one 2', () => {
    expect(lengthOfLongestSubstring('xxxxx')).toBe(1);
  });

  it('returns correctly 1', () => {
    expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
  });

  it('returns correctly 2', () => {
    expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
  });

  it('returns correctly 3', () => {
    expect(lengthOfLongestSubstring('au')).toBe(2);
  });

  it('returns correctly 4', () => {
    expect(lengthOfLongestSubstring('abba')).toBe(2);
  });

  it('returns correctly 5', () => {
    expect(lengthOfLongestSubstring('uqinntq')).toBe(4);
  });
});

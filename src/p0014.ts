// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

function longestCommonPrefixForTwo(first: string, second: string): string {
  let charFirst: string;
  let charSecond: string;
  let lcp = '';

  for (let i = 0; i < first.length; i++) {
    charFirst = first[i];
    charSecond = second[i];

    if (charSecond === undefined) {
      break;
    }

    if (charFirst === charSecond) {
      lcp += charFirst;
    } else {
      break;
    }
  }

  return lcp;
}

function longestCommonPrefix(strs: string[]): string {
  const { length } = strs;

  if (strs.length < 2) {
    return strs[0] || '';
  }

  let i = 2;
  let lcp = longestCommonPrefixForTwo(strs[0], strs[1]);

  while (lcp && i < length) {
    lcp = longestCommonPrefixForTwo(lcp, strs[i]);
    i++;
  }

  return lcp;
}

describe('longest common prefix', () => {
  it('returns empty when array is empty', () => {
    expect(longestCommonPrefix([])).toBe('');
  });

  it('returns empty when not match', () => {
    expect(longestCommonPrefix([
      'abc',
      'abcde',
      'bdd',
    ])).toBe('');
  });

  it('works', () => {
    expect(longestCommonPrefix([
      'abc',
      'abcde',
      'abdd',
    ])).toBe('ab');
  });
});

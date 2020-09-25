// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

function isValid(s: string): boolean {
  if (!s) {
    return true;
  }

  const expectStash = [] as string[];
  let expected = '';
  let current = '';
  const MAP = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let i = 0; i < s.length; i++) {
    current = s[i];
    expected = MAP[current as keyof typeof MAP];

    if (expected) {
      expectStash.push(expected);
    } else {
      expected = expectStash.pop() as string;

      if (expected !== current) {
        return false;
      }
    }
  }

  return !expectStash.length;
}

describe('is valid brackets', () => {
  it('allows empty', () => {
    expect(isValid('')).toBe(true);
  });

  it('works', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
  });

  it('works when nested', () => {
    expect(isValid('([])')).toBe(true);
    expect(isValid('([{]})')).toBe(false);
  });

  it('returns false when only one character', () => {
    expect(isValid('[')).toBe(false);
    expect(isValid(']')).toBe(false);
  });
});

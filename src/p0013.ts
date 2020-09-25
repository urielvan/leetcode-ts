// 罗马数字转整数

const MAP: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  let result = 0;
  let romanNumber: string;
  let nextNumber: string;

  for (let i = 0, { length } = s; i < length; i++) {
    romanNumber = s[i];

    switch (romanNumber) {
      case 'V':
      case 'L':
      case 'D':
      case 'M':
        result += MAP[romanNumber];

        break;

      case 'I':
        nextNumber = s[i + 1];

        if (nextNumber === 'V' || nextNumber === 'X') {
          result += MAP[nextNumber] - MAP[romanNumber];
          i++;
        } else {
          result += MAP[romanNumber];
        }

        break;

      case 'X':
        nextNumber = s[i + 1];

        if (nextNumber === 'L' || nextNumber === 'C') {
          result += MAP[nextNumber] - MAP[romanNumber];
          i++;
        } else {
          result += MAP[romanNumber];
        }

        break;

      case 'C':
        nextNumber = s[i + 1];

        if (nextNumber === 'D' || nextNumber === 'M') {
          result += MAP[nextNumber] - MAP[romanNumber];
          i++;
        } else {
          result += MAP[romanNumber];
        }

        break;

      default:
        break;
    }
  }

  return result;
}

describe('roman to int', () => {
  it('parse simple', () => {
    expect(romanToInt('II')).toBe(2);
    expect(romanToInt('XI')).toBe(11);
    expect(romanToInt('MDCLXVI')).toBe(1666);
  });

  it('parse complex', () => {
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt('XL')).toBe(40);
    expect(romanToInt('XC')).toBe(90);
    expect(romanToInt('MCMXCIV')).toBe(1994);
  });
});

/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 */

function twoSum(nums: number[], target: number): number[] {
  if (nums.length < 2) {
    return [];
  }

  // key - 数值
  // value - 下标位置
  const indexes = {} as Record<number, number>;
  let remains: number;
  let current: number;

  for (let i = 0; i < nums.length; i++) {
    current = nums[i];
    remains = target - current;

    if (indexes[remains] !== undefined) {
      return [i, indexes[remains]];
    }

    indexes[current] = i;
  }

  return [];
}

describe('p0001', () => {
  it('simply finds', () => {
    expect(twoSum([1, 3, 5], 6)).toMatchObject([2, 0]);
  });

  it('returns empty when not found', () => {
    expect(twoSum([1, 2, 3, 4], 8)).toMatchObject([]);
  });

  it("doesn't use same value twice", () => {
    expect(twoSum([1, 2, 3, 6], 4)).toMatchObject([2, 0]);
  });

  it('returns empty when the array has length less than 2', () => {
    expect(twoSum([], 2)).toMatchObject([]);
  });
});

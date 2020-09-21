// 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
// 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
// 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

import { ListNode, numberToListNode } from './utils/ListNode';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let first = l1;
  let second = l2;

  if (!first || !second) {
    return first || second;
  }
  let digitFirst = first.val as number | null;
  let digitSecond = second.val as number | null;
  let sum = (digitFirst || 0) + (digitSecond || 0);
  let carry = Math.floor(sum / 10);
  const firstNode = new ListNode(sum % 10);
  let current = firstNode;
  let next: ListNode;

  first = first.next;
  second = second.next;
  digitFirst = first && first.val;
  digitSecond = second && second.val;

  while (digitFirst !== null || digitSecond !== null || carry !== 0) {
    sum = (digitFirst || 0) + (digitSecond || 0) + carry;
    carry = Math.floor(sum / 10);
    next = new ListNode(sum % 10);
    current.next = next;
    current = next;
    first = first && first.next;
    second = second && second.next;
    digitFirst = first && first.val;
    digitSecond = second && second.val;
  }

  return firstNode;
}

describe('add two numbers', () => {
  it('with one or more values of null', () => {
    const second = 956;

    expect(addTwoNumbers(
      null,
      numberToListNode(second),
    )).toMatchObject(numberToListNode(second));
  });

  it('with one or more values of null 2', () => {
    expect(addTwoNumbers(null, null)).toBeNull();
  });

  it('adds with zero', () => {
    const second = 956;

    expect(addTwoNumbers(
      numberToListNode(0),
      numberToListNode(second),
    )).toMatchObject(numberToListNode(second));
  });

  it('adds without caryy digits', () => {
    const first = 103;
    const second = 204;

    expect(addTwoNumbers(
      numberToListNode(first),
      numberToListNode(second),
    )).toMatchObject(numberToListNode(307));
  });

  it('adds with caryy digits', () => {
    const first = 297;
    const second = 156;

    expect(addTwoNumbers(
      numberToListNode(first),
      numberToListNode(second),
    )).toMatchObject(numberToListNode(453));
  });

  it('adds with caryy digits 2', () => {
    const first = 297;
    const second = 956;

    expect(addTwoNumbers(
      numberToListNode(first),
      numberToListNode(second),
    )).toMatchObject(numberToListNode(1253));
  });
});

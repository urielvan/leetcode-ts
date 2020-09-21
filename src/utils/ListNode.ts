export class ListNode {
  constructor(public val = 0, public next: ListNode | null = null) {}
}

export function numberToListNode(input: number): ListNode {
  let length = input.toString().length - 1;
  let current = new ListNode(Math.floor(input / (10 ** length)));
  let remain = input % (10 ** length);
  let next: ListNode;

  length--;

  for (; length >= 0; length--) {
    next = new ListNode(Math.floor(remain / (10 ** length)));
    next.next = current;
    current = next;
    remain %= (10 ** length);
  }

  return current;
}

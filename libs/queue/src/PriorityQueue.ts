import { Queue, Node } from './Queue.js';

type Comparator<TItem> = (itemA: TItem, itemB: TItem) => number;

export class PriorityQueue<TItem> extends Queue<TItem> {
  #comparator: Comparator<TItem>;

  constructor(comparator: Comparator<TItem>) {
    super();
    this.#comparator = comparator;
  }

  enqueue(item: TItem): void {
    const node = new Node(item);

    if (this.head === null || this.tail === null) {
      this.head = this.tail = node;
      return;
    }

    if (this.#comparator(this.head.value, node.value) > 0) {
      node.next = this.head;
      this.head = node;

      return;
    }

    let current: Node<TItem> = this.head;

    while (
      current.next !== null &&
      this.#comparator(current.next.value, node.value) <= 0
    ) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;
  }
}

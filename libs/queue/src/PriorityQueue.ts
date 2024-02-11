import { Queue, Node } from './Queue.js';

type Comparator<TItem> = (itemA: TItem, itemB: TItem) => number;

export class PriorityQueue<TItem> extends Queue<TItem> {
  #comparator: Comparator<TItem>;

  constructor(comparator: Comparator<TItem>) {
    super();
    this.#comparator = comparator;
  }

  private hasPriority(itemA: Node<TItem>, itemB: Node<TItem>) {
    return this.#comparator(itemA.value, itemB.value) > 0;
  }

  enqueue(item: TItem): void {
    const node = new Node(item);

    if (this.head === null || this.tail === null) {
      this.head = this.tail = node;
      this.size++;
      return;
    }

    if (this.hasPriority(this.head, node)) {
      node.next = this.head;
      this.head = node;
      this.size++;

      return;
    }

    let current: Node<TItem> = this.head;

    while (current.next !== null && !this.hasPriority(current.next, node)) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;
    this.size++;
  }
}

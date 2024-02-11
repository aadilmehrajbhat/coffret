export class Node<T> {
  next: Node<T> | null = null;
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

export class Queue<T> {
  protected head: Node<T> | null = null;
  protected tail: Node<T> | null = null;
  public size: number = 0;

  constructor() {
    this.clear();
  }

  enqueue(item: T) {
    const node = new Node(item);

    if (this.head && this.tail) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }

    this.size++;
  }

  dequeue(): T | undefined {
    if (this.head) {
      const current = this.head;

      this.head = this.head.next;
      this.size--;

      return current.value;
    }
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  *[Symbol.iterator]() {
    let current = this.head;

    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

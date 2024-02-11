import test from 'ava';

import { PriorityQueue } from './PriorityQueue.js';

const comparator = (a: string, b: string) => a.localeCompare(b);

test('should return the instance of Queue', (t) => {
  const queue = new PriorityQueue(comparator);

  t.true(queue instanceof PriorityQueue);
});

test('should enqueue item in the queue ', (t) => {
  const queue = new PriorityQueue(comparator);

  queue.enqueue('1');
  queue.enqueue('2');

  t.is(queue.size, 2);
  t.deepEqual([...queue], ['1', '2']);
});

test.only('should enqueue item based on priority', (t) => {
  const queue = new PriorityQueue(comparator);

  queue.enqueue('4');
  t.deepEqual([...queue], ['4']);

  queue.enqueue('2');
  t.deepEqual([...queue], ['2', '4']);

  queue.enqueue('3');
  t.deepEqual([...queue], ['2', '3', '4']);

  queue.enqueue('8');
  t.deepEqual([...queue], ['2', '3', '4', '8']);

  queue.enqueue('7');
  t.deepEqual([...queue], ['2', '3', '4', '7', '8']);

  queue.enqueue('1');
  t.deepEqual([...queue], ['1', '2', '3', '4', '7', '8']);
});

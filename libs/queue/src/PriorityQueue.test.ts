import test from 'ava';

import { PriorityQueue } from './PriorityQueue.js';

const comparator = (a: string, b: string) => a.localeCompare(b);

test('should return the instance of PriorityQueue', (t) => {
  const queue = new PriorityQueue(comparator);

  t.true(queue instanceof PriorityQueue);
});

test('should return the current default value', (t) => {
  const queue = new PriorityQueue(comparator);

  t.is(queue.size, 0);
  t.deepEqual([...queue], []);
});

test('should enqueue item in the queue ', (t) => {
  const queue = new PriorityQueue(comparator);

  queue.enqueue('1');
  queue.enqueue('2');

  t.is(queue.size, 2);
  t.deepEqual([...queue], ['1', '2']);
});

test('should enqueue item based on priority', (t) => {
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

test('should dequeue items in the queue', (t) => {
  const queue = new PriorityQueue(comparator);

  queue.enqueue('1');
  queue.enqueue('3');
  queue.enqueue('2');

  t.deepEqual([...queue], ['1', '2', '3']);

  t.is(queue.dequeue(), '1');
  t.is(queue.size, 2);

  t.is(queue.dequeue(), '2');
  t.is(queue.size, 1);

  t.is(queue.dequeue(), '3');
  t.is(queue.size, 0);
});

test('should dequeue empty queue correctly', (t) => {
  const queue = new PriorityQueue(comparator);

  t.is(queue.size, 0);

  t.is(queue.dequeue(), undefined);

  t.is(queue.size, 0);
});

test('should clear the queue', (t) => {
  const queue = new PriorityQueue(comparator);

  queue.enqueue('1');
  queue.enqueue('3');
  queue.enqueue('2');

  t.deepEqual([...queue], ['1', '2', '3']);

  queue.clear();
  t.is(queue.size, 0);
});

test('should clear the empty queue', (t) => {
  const queue = new PriorityQueue(comparator);

  t.is(queue.size, 0);
  queue.clear();
  t.is(queue.size, 0);
});

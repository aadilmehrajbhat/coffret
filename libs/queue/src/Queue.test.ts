import test from 'ava';

import { Queue } from './Queue.js';

test('should return the instance of Queue', (t) => {
  const queue = new Queue();

  t.true(queue instanceof Queue);
});

test('should return the correct default length', (t) => {
  const queue = new Queue();

  t.is(queue.size, 0);
});

test('should enqueue items in the queue', (t) => {
  const queue = new Queue<string>();

  queue.enqueue('Alpha');
  t.is(queue.size, 1);

  queue.enqueue('Beta');
  queue.enqueue('Gamma');

  t.is(queue.size, 3);
  t.deepEqual([...queue], ['Alpha', 'Beta', 'Gamma']);
});

test('should not dequeue an empty queue', (t) => {
  const queue = new Queue<string>();

  t.is(queue.size, 0);

  const item = queue.dequeue();

  t.is(item, undefined);
  t.is(queue.size, 0);
});

test('should dequeue items in the queue', (t) => {
  const queue = new Queue<string>();

  queue.enqueue('Alpha');
  queue.enqueue('Beta');
  queue.enqueue('Gamma');

  t.is(queue.size, 3);

  t.is(queue.dequeue(), 'Alpha');
  t.is(queue.dequeue(), 'Beta');
  t.is(queue.dequeue(), 'Gamma');

  t.deepEqual([...queue], []);
  t.is(queue.size, 0);
});

test('should clear the queue', (t) => {
  const queue = new Queue<string>();

  queue.enqueue('Alpha');
  queue.enqueue('Beta');
  queue.enqueue('Gamma');

  t.is(queue.size, 3);
  t.deepEqual([...queue], ['Alpha', 'Beta', 'Gamma']);

  queue.clear();

  t.is(queue.size, 0);
});

test('should clear the empty queue', (t) => {
  const queue = new Queue<string>();

  t.is(queue.size, 0);

  queue.clear();

  t.is(queue.size, 0);
});

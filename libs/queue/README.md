# Queue

> Lightweight, type-safe, and memory-efficient queue for resource-sensitive applications.

## Install

```bash
npm install @coffret/queue
```

## Usage

```ts
import { Queue } from '@coffret/queue';

type AwesomeFood = '🍎' | '🌽' | '🥜';

const queue = new Queue<AwesomeFood>();

queue.enqueue('🌽');
queue.enqueue('🥜');

console.log(queue.size);
//=> 2

console.log(...queue);
//=> '🌽 🥜'

console.log(queue.dequeue());
//=> '🌽'

console.log(queue.dequeue());
//=> '🥜'
```

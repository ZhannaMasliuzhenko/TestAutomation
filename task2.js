// ============================================================
// Завдання 2
// ============================================================
/**
 Створи три файли та зроби індексний (barrel) файл:

Файл 4: task2.js
   - Імпортуй все ТІЛЬКИ з utils/index.js

 Очікуваний результат (task2.js):
 capitalize("hello world")   => "Hello world"
 truncate("Довгий текст", 6) => "Довгий..."
 clamp(150, 0, 100)          => 100
 randomInt(1, 10)            => (число від 1 до 10)
 */

 // task2.js:
/*import { capitalize, truncate, clamp, randomInt } from './utils/index.js';
// Ваш код тут:*/

import { capitalize, truncate, clamp, randomInt } from './utils/index.js';

console.log("capitalize('hello world') =>", capitalize("hello world"));
console.log("truncate('Довгий текст', 6) =>", truncate("Довгий текст", 6));
console.log("clamp(150, 0, 100) =>", clamp(150, 0, 100));
console.log("randomInt(1, 10) =>", randomInt(1, 10));
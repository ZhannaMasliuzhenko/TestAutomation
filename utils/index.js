// ============================================================
// Завдання 2
// ============================================================
/**
 Створи три файли та зроби індексний (barrel) файл:

Файл 3: utils/index.js  ← ТІЛЬКИ re-exports, жодної логіки
   - Re-export усього з strings.js та numbers.js

// utils/index.js:
/*export { capitalize, truncate } from './strings.js';
// Ваш код тут (numbers):*/

export { capitalize, truncate } from './strings.js';
export { clamp, randomInt } from './numbers.js';
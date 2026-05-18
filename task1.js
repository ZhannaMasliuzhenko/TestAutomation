/** Файл 2: task1.js
   - Імпортуй add та multiply під іменами sum і mult (через "as")
   - Імпортуй PI як namespace через import * as Math
   - Виведи результати

 Очікуваний результат (task1.js):
 sum(5, 3)       => 8
 mult(5, 3)      => 15
 Math.PI         => 3.14159
 Math.subtract(10, 4) => 6
 */

 // task1.js:
/*import { add as sum, multiply as mult } from './mathUtils.js';
import * as Math from './mathUtils.js';

// Ваш код тут:*/

import { add as sum, multiply as mult } from './mathUtils.js';
import * as Math from './mathUtils.js';
console.log("sum(5, 3) =>", sum(5, 3));
console.log("mult(5, 3) =>", mult(5, 3));
console.log("Math.PI =>", Math.PI);
console.log("Math.subtract(10, 4) =>", Math.subtract(10, 4));
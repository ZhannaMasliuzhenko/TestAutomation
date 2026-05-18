// ============================================================
// Завдання 1
// ============================================================
/**
 Створи два файли:

 Файл 2: task1.js
   - Імпортуй add та multiply під іменами sum і mult (через "as")
   - Імпортуй PI як namespace через import * as Math
   - Виведи результати

// mathUtils.js:
/*export const PI = 3.14159;

export function add(a, b) {
    // Ваш код тут:
}
export function subtract(a, b) {
    // Ваш код тут:
}
export function multiply(a, b) {
    // Ваш код тут:
}*/


export const PI = 3.14159;
export function add(a, b) 
{
    return a + b;
}
export function subtract(a, b) 
{
    return a - b;
}
export function multiply(a, b) 
{
    return a * b;
}
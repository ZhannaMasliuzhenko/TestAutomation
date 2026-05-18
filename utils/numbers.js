// ============================================================
// Завдання 2
// ============================================================
/**
 Створи три файли та зроби індексний (barrel) файл:

Файл 2: utils/numbers.js
   - Функція clamp(val, min, max) — обмежує значення між min і max
   - Функція randomInt(min, max) — випадкове ціле число в діапазоні

   // utils/numbers.js:
/*export function clamp(val, min, max) {
    // Ваш код тут:
}
export function randomInt(min, max) {
    // Ваш код тут:
}*/

export function clamp(val, min, max) 
{
    if (val < min) return min;
    if (val > max) return max;
    return val;
}
export function randomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// ============================================================
// Завдання 2
// ============================================================
/**
 Створи три файли та зроби індексний (barrel) файл:

 Файл 1: utils/strings.js
   - Функція capitalize(str) — перша літера велика, решта маленькі
   - Функція truncate(str, n) — обрізає до n символів і додає "..." якщо довший

   // utils/strings.js:
/*export function capitalize(str) {
    // Ваш код тут:
}
export function truncate(str, n) {
    // Ваш код тут:
}*/

export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
export function truncate(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    }
    return str;
}
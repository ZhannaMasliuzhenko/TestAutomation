// ============================================================
// Завдання 3
// ============================================================
/**
 Створи два файли та реалізуй динамічний імпорт:

 Файл 1: calculator.js
   - Default export — об'єкт із методами: add, subtract, multiply, divide
   - divide має кидати Error("Ділення на нуль") якщо b === 0

 ---
 Завантаження калькулятора...
 Помилка: Ділення на нуль
 */

// calculator.js:
/*const calculator = {
    add:      (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide:   (a, b) => {
        // Ваш код тут:
    }
};

export default calculator;*/

const calculator = {
    add:      (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide:   (a, b) => {
        if (b === 0) {
            throw new Error("Ділення на нуль");
        }
        return a / b;
    }
};

export default calculator;
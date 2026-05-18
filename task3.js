// ============================================================
// Завдання 3
// ============================================================
/**
 Створи два файли та реалізуй динамічний імпорт:

 Файл 2: task3.js
   - НЕ використовуй статичний import на початку файлу
   - Напиши async функцію calculate(a, b), яка:
       1. Динамічно завантажує calculator.js через import()
       2. Виводить результати всіх 4 операцій
       3. Обробляє помилку ділення на нуль через try/catch

 Очікуваний результат (task3.js):
 Завантаження калькулятора...
 10 + 3 = 13
 10 - 3 = 7
 10 * 3 = 30
 10 / 3 = 3.33
 ---

// task3.js:
/*async function calculate(a, b) {
    console.log("Завантаження калькулятора...");
    // Ваш код тут (динамічний import):
}

calculate(10, 3);
calculate(10, 0);*/

async function calculate(a, b) {
    console.log("Завантаження калькулятора...");
    try {
        const { default: calc } = await import('./calculator.js');
        console.log(a + " + " + b + " = " + calc.add(a, b));
        console.log(a + " - " + b + " = " + calc.subtract(a, b));
        console.log(a + " * " + b + " = " + calc.multiply(a, b));
        console.log(a + " / " + b + " = " + calc.divide(a, b).toFixed(2));
    } catch (error) {
        console.log("Помилка:", error.message);
    }
}

calculate(10, 3);
calculate(10, 0);
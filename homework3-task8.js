// ============================================================
// Завдання 8
// ============================================================
/**
 Є об'єкт, що описує людину. Напиши функцію, яка:
   1. Перевіряє, чи є в об'єкта властивість "email"
   2. Якщо є — виводить "Email: <значення>"
   3. Якщо немає — додає властивість email зі значенням "не вказано" і виводить повідомлення про це

 Очікуваний результат (для першого об'єкта):
 checkEmail(person1) => "Email: john@example.com"

 Очікуваний результат (для другого об'єкта):
 checkEmail(person2) => "Email не вказано, додано значення за замовчуванням"
 */

var person1 = { name: "Джон",  age: 30, email: "john@example.com" };
var person2 = { name: "Марія", age: 25 };

function checkEmail(person) {
    // Ваш код тут:
    if (person.email) 
        {
        console.log("Email: " + person.email);
    } 
    else 
        {
        person.email = "не вказано";
        console.log("Email не вказано, додано значення за замовчуванням");
    }
}
checkEmail(person1);
checkEmail(person2);
console.log(person2);
// ============================================================
// Завдання 6
// ============================================================
/**
 Є масив об'єктів — список студентів із їхніми оцінками.
 Відсортуй студентів за оцінкою від найвищої до найнижчої
 і виведи їхні імена у новому масиві.

 Очікуваний результат:
 sortByGrade(students) => ["Оксана", "Михайло", "Дарина", "Іван"]
 */

var students = [
    { name: "Іван",    grade: 72 },
    { name: "Оксана",  grade: 95 },
    { name: "Михайло", grade: 88 },
    { name: "Дарина",  grade: 79 }
];

function sortByGrade(arr) {
    // Ваш код тут:
    arr.sort((a, b) => b.grade - a.grade);
    let result = [];
    for (let i = 0; i < arr.length; i++) 
        {
        result.push(arr[i].name);
    }
    return result;
}
console.log(sortByGrade(students));
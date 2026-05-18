// ============================================================
// Завдання 7
// ============================================================
/**
 Напиши функцію, яка об'єднує два масиви, видаляє дублікати
 і повертає відсортований результат за зростанням.

 Очікуваний результат:
 mergeUnique([1, 3, 5], [3, 5, 7]) => [1, 3, 5, 7]
 mergeUnique([2, 2, 4], [4, 6])    => [2, 4, 6]
 */

function mergeUnique(arr1, arr2) {
    // Ваш код тут:
    let combined = arr1.concat(arr2);
    let unique = [];
    for (let i = 0; i < combined.length; i++) 
        {
        if (unique.indexOf(combined[i]) === -1) 
            {
            unique.push(combined[i]);
        }
    }
    unique.sort((a, b) => a - b);
    return unique;
}
console.log(mergeUnique([1, 3, 5], [3, 5, 7]));
console.log(mergeUnique([2, 2, 4], [4, 6]));
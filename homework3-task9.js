// ============================================================
// Завдання 9
// ============================================================
/**
 Є масив рядків. Напиши функцію, яка групує слова за їхньою довжиною
 і повертає об'єкт, де ключ — довжина слова, значення — масив слів із такою довжиною.

 Очікуваний результат:
 groupByLength(["cat", "dog", "elephant", "rat", "ox", "emu"])
   => { 2: ["ox"], 3: ["cat", "dog", "rat", "emu"], 8: ["elephant"] }
 */

function groupByLength(words) {
    // Ваш код тут:
     let result = {};
     for (let i = 0; i < words.length; i++) 
        {
        let word = words[i];
        let len = word.length;
        if (result[len] === undefined) 
            {
            result[len] = [];
        }
         result[len].push(word);
    }
    return result;
}
console.log(groupByLength(["cat", "dog", "elephant", "rat", "ox", "emu"]));
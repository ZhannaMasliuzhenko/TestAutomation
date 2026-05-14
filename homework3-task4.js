// ============================================================
// Завдання 4
// ============================================================
/**
 Є масив об'єктів, де кожен об'єкт описує товар у магазині.
 Знайди всі товари, ціна яких менше 100 грн, і поверни масив тільки їхніх назв.

 Очікуваний результат:
 getCheapProducts(products) => ["Ручка", "Олівець"]
 */

var products = [
    { name: "Ноутбук", price: 25000 },
    { name: "Ручка",   price: 15 },
    { name: "Олівець", price: 8 },
    { name: "Монітор", price: 8000 }
];

function getCheapProducts(arr) {
    // Ваш код тут:
   {
    let result = [];
    for (let i = 0; i < arr.length; i++) 
        {
        if (arr[i].price < 100) 
            {
            result.push(arr[i].name);
        }
    }
    return result;
}
}

console.log(getCheapProducts(products));
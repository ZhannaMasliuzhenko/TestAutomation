// ============================================================
// Завдання 10 (підвищена складність ⭐)
// ============================================================
/**
 Є масив об'єктів — замовлення інтернет-магазину.
 Кожне замовлення містить: id, customer (ім'я покупця), items (масив товарів),
 де кожен товар має name і price.

 Напиши функцію getOrderReport(orders), яка повертає масив об'єктів із такими полями:
   - customer   — ім'я покупця
   - totalPrice — загальна сума замовлення
   - itemCount  — кількість товарів у замовленні
   - mostExpensive — назва найдорожчого товару

 Відсортуй результат за totalPrice від найбільшої до найменшої.

 Очікуваний результат:
 [
   { customer: "Оксана", totalPrice: 1350, itemCount: 3, mostExpensive: "Клавіатура" },
   { customer: "Богдан", totalPrice: 200,  itemCount: 2, mostExpensive: "Мишка" },
   { customer: "Іванка", totalPrice: 50,   itemCount: 1, mostExpensive: "Кабель USB" }
 ]
 */

var orders = [
    {
        id: 1,
        customer: "Богдан",
        items: [
            { name: "Мишка",     price: 150 },
            { name: "Кабель USB", price: 50 }
        ]
    },
    {
        id: 2,
        customer: "Оксана",
        items: [
            { name: "Клавіатура", price: 800 },
            { name: "Мишка",      price: 300 },
            { name: "Килимок",    price: 250 }
        ]
    },
    {
        id: 3,
        customer: "Іванка",
        items: [
            { name: "Кабель USB", price: 50 }
        ]
    }
];
function getOrderReport(orders) {
    // Ваш код тут:
     let result = [];
      for (let i = 0; i < orders.length; i++) 
        {
        let order = orders[i];
         let totalPrice = 0;
        for (let j = 0; j < order.items.length; j++) 
            {
            totalPrice = totalPrice + order.items[j].price;
        }
        let mostExpensive = order.items[0];
        for (let k = 0; k < order.items.length; k++) 
            {
            if (order.items[k].price > mostExpensive.price) 
                {
                mostExpensive = order.items[k];
            }
        }
         result.push({
            customer: order.customer,
            totalPrice: totalPrice,
            itemCount: order.items.length,
            mostExpensive: mostExpensive.name
        });
    }
    for (let i = 0; i < result.length; i++) 
        {
        for (let j = i + 1; j < result.length; j++) 
            {
            if (result[j].totalPrice > result[i].totalPrice) 
                {
                let temp = result[i];
                result[i] = result[j];
                result[j] = temp;
            }
        }
    }
    return result;
}
console.log(getOrderReport(orders));
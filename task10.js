// ============================================================
// Завдання 10 (підвищена складність ⭐)
// ============================================================
/**
 Напиши async функцію batchRequests(ids, batchSize), яка:
   - Виконує запити пакетами по batchSize штук ПАРАЛЕЛЬНО
   - Пакети виконуються ПОСЛІДОВНО (наступний — після попереднього)
   - Повертає єдиний масив усіх результатів у правильному порядку

 Приклад: ids = [1,2,3,4,5], batchSize = 2
   Пакет 1: [1, 2] паралельно → чекаємо
   Пакет 2: [3, 4] паралельно → чекаємо
   Пакет 3: [5]               → чекаємо
   Результат: [item1, item2, item3, item4, item5]

 Очікуваний результат:
 Пакет: [1, 2]
 Пакет: [3, 4]
 Пакет: [5]
 Всі дані: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }]
 */

function fetchItem(id) {
    return new Promise(r => setTimeout(() => r({ id, data: `item_${id}` }), 400));
}

async function batchRequests(ids, batchSize) {
    // Ваш код тут:
  var allResults = [];
    var i = 0;
    while (i < ids.length) 
        {
        var batch = [];
        var count = 0;
        while (count < batchSize && i < ids.length) 
            {
            batch.push(ids[i]);
            i++;
            count++;
        }
        console.log("Пакет:", batch);
        var batchPromises = [];
        for (var j = 0; j < batch.length; j++) 
            {
            batchPromises.push(fetchItem(batch[j]));
        }
        var batchResults = await Promise.all(batchPromises);
        for (var k = 0; k < batchResults.length; k++) 
            {
            allResults.push(batchResults[k]);
        }
    }
    return allResults;
}
batchRequests([1, 2, 3, 4, 5], 2)
    .then(results => console.log("Всі дані:", results));
// ============================================================
// Завдання 7
// ============================================================
/**
 Є три незалежних "запити". Виконай їх ПАРАЛЕЛЬНО і виведи
 всі результати після завершення останнього.

 Очікуваний результат:
 ["Користувачі", "Товари", "Замовлення"]
 Час: ~1000мс (не 2400мс!)
 */

function getUsers()    { return new Promise(r => setTimeout(() => r("Користувачі"), 1000)); }
function getProducts() { return new Promise(r => setTimeout(() => r("Товари"),       800));  }
function getOrders()   { return new Promise(r => setTimeout(() => r("Замовлення"),   600));  }

async function loadAll() {
    var start = Date.now();
    // Ваш код тут:
    var results = await Promise.all([getUsers(), getProducts(), getOrders()]);
    console.log(results);

    console.log("Час:", Date.now() - start, "мс");
}

loadAll();
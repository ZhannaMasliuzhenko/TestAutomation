// Task 7

function greet(name = "Гість", greeting = "Привіт") 
{
  return greeting + ", " + name + "!";
}
console.log(greet());
console.log(greet("Денис"));
console.log(greet("Жанна", "Вітаю"));
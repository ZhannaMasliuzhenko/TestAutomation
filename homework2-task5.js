// Task 5

let n = 91;
let i = 2;
while (i <= n) 
    {
  if (n % i === 0) 
    {
    console.log("Найменший дільник: " + i);
    break;
  }
  i++;
}
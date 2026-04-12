// Task 8

let operation = "subtract";
let calculate;

switch (operation) 
{
  case "add":
    calculate = function(a, b) 
    {
      return a + b;
    };
    break;
  case "subtract":
    calculate = function(a, b) 
    {
      return a - b;
    };
    break;
  case "multiply":
    calculate = function(a, b) 
    {
      return a * b;
    };
    break;
  case "divide":
    calculate = function(a, b) 
    {
      if (b === 0) 
        {
        return "Ділення на 0 неможливе";
      }
      return a / b;
    };
    break;
  default:
    calculate = function() 
    {
      return "Невідома операція";
    };
}
console.log(calculate(4, 2));
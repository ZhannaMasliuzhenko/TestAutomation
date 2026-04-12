// Task 2

let score = 500;

switch (true) {
    case (score >=90 && score <=100):
        console.log ("A");
        break;
    case (score >=70 && score <=89):
        console.log ("B");
        break; 
    case (score >=50 && score <=69):
        console.log ("C");
        break;
    case (score >=0 && score <=49):
        console.log ("F");
        break; 
     default:
        console.log ("Неіснуюча оцінка");         
}
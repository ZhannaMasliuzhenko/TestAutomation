// Task 10

function generatePassword(length = 8) 
{
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";
  for (let i = 0; i <= length; i++) 
    {
    let randomIndex = Math.floor(Math.random()*chars.length);
    password += chars[randomIndex];
  }
  return password;
}
console.log(generatePassword());
console.log(generatePassword(12));
// Task 9

function repeatAction(n, callback) 
{
  for (let i = 1; i <= n; i++) 
    {
    callback(i);
  }
}
repeatAction(3, console.log);
repeatAction(4, function(i) 
{
  console.log("Крок " + i + " з 4");
}
);
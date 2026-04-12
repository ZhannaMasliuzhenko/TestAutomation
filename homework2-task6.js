// Task 6

for (let i = 1; i<=100; i++)
{
    if (String(i).includes('3') || String(i).includes('7'))
{
    continue;
}
    console.log(i);
}
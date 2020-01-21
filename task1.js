var n = parseInt(prompt("Please Enter Number to find its Factorial!:", 9));
var factorial = factor(n);

//Option 1: Code avaiable in JS PP Slides
function factor(n)
{
    if(n<=1)
    {
        return 1;
    }
    else
    {
        return n*factor(n-1);
    }
}

//Option 2: Using Decremental for loop
/*function factor(n)
{
    for(i=n-1;i>1;i--)
    {
        n=n*i;
    }
    return n;
}*/

//Option 3: Using Incremental for loop
/*function factor(n)
{
    for(i=2,j=1;i<=n;i++)
    {
        j=j*i;
    }
    return j;
}*/

document.write(n+"! = "+factorial);
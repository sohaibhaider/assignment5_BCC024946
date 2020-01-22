var amount = parseInt(prompt("Enter _Amount to Withdraw", 470));
var denom100 = 0;
var denom50 = 0;
var denom10 = 0;

document.write("Your Amount to Withdraw is "+findCurrency(amount)+"<br/>You will have");

if(denom100 != 0){
    document.write(" "+denom100+" hundred note");
    if(denom100 > 1){
        document.write("s");
    }
}
if(denom50 != 0){
    document.write(" "+denom50+" fifty note");
    if(denom50 > 1){
        document.write("s");
    }
}
if(denom10 != 0){
    document.write(" "+denom10+" ten note");
    if(denom10 > 1){
        document.write("s");
    }
}

//document.write("<br/>You will have "+denom100+" hundred notes "+denom50+" fifty notes "+denom10+" ten notes.");

function findCurrency(_amount){
    if(_amount >= 100){
        denom100 = parseInt(_amount/100);
        return findCurrency(_amount%100);
    }
    else if(_amount >= 50){
        denom50 = parseInt(_amount/50);
        return findCurrency(_amount%50);
    }
    else{
        denom10 = parseInt(_amount/10);
        return amount;
    }
}
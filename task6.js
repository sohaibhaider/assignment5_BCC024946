var originArray = [];
var arrayLength = parseInt(prompt("Please Enter Length of Array", 4));

document.write("Original Array: "+createArray(arrayLength));
document.write("<br/>Mirrored Array: "+mirrorArray(originArray));

function createArray(arrayLength){
    originArray.push(prompt("Please Enter Character on Index "+originArray.length, "X"));
    if(arrayLength > 1){
        return createArray(--arrayLength);
    }
    return originArray;
}

function mirrorArray(originArray){
    for(i=originArray.length-1;i >= 0;i--){
        originArray.push(originArray[i]);
    }
    return originArray;
}
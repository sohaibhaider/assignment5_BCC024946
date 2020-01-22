var string = prompt("Please Enter String", "ULTRAREVOLUTIONARIES");

var count = 0;
document.write(countVowel(string));

//Option 1: Using For Loop
/*function countVowel(string){
    var newString = string.toLowerCase();
    for(i = 0;i < newString.length;i++){
        if(newString[i] == 'a' || newString[i] == 'e' || newString[i] == 'i' || newString[i] == 'o' || newString[i] == 'u'){
            count++;
        }
    }
    return count;
}*/

//Option 2: Using RegEx
function countVowel(string){
    return string.match(/[AEIOUaeiou]/gm).length;
}
var string = prompt("Please Enter String to Check if it is Palindrome or not:", "madam");

document.write(palindromeTest(string));

function palindromeTest(word){
    word = word.toLowerCase();
    for(i = 0, j = word.length-1; i < word.length; i++, j--){
        if(word[i] != word[j]){
            return "Passed String '"+string+"' is NOT a Palindrome!";
        }
    }
    return "Passed String '"+string+"' is Definitely a Palindrome!";
}
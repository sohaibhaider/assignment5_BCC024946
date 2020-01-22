while(isVowel(prompt("Please Enter an Alphabet\nEnter '0' to Exit", "A").substr(0,1).toLowerCase()) != 0){

}

function isVowel(char){
    switch (char){
        case '0':
            console.log(char+" EXIT");
            return 0;
        case 'a':
            console.log(char+" is "+true);
            return alert(true);
        case 'e':
            console.log(char+" is "+true);
            return alert(true);
        case 'i':
            console.log(char+" is "+true);
            return alert(true);
        case 'o':
            console.log(char+" is "+true);
            return alert(true);
        case 'u':
            console.log(char+" is "+true);
            return alert(true);
        default:
            console.log(char+" is "+false);
            return alert(false);
    }
}
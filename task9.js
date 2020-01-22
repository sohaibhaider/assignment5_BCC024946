var date = new Date();
var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.write(addWeek(prompt("Please Enter Number of Weeks to Add", 10)));

function addWeek(number){
    date.setTime(date.getTime()+number*7*24*60*60*1000);
    return date.getDate()+" "+monthName[date.getMonth()]+" "+date.getFullYear();ss
    /*return date.toDateString();
    return date.toISOString();
    return date.toJSON();
    return date.toLocaleDateString();
    return date.toLocaleString();
    return date.toLocaleTimeString();
    return date.toString();
    return date.toTimeString();
    return date.toUTCString();*/
}
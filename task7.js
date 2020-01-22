var date = new Date(prompt("Enter Date 'YYYY/MM/DD' OR 'Sep 9, 2019'", "Sep 9, 2019"));
document.write(isWeekend(date));

function isWeekend(date){
    if(date.getDay() == 0 || date.getDay() == 6){
        return "Its Weekend";
    }
    else{
        return "Sorry! wait for "+(6-date.getDay())+" more days";
    }
}
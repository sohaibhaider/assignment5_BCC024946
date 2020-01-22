var birthDay = new Date(prompt("Enter Date 'YYYY/MM/DD' OR 'Feb 7, 1987'", "Feb 7, 1987"));
var date = new Date();
var ageYears, ageMonths, ageDays;

document.write("Birthday: "+birthDay.toDateString()+"<br/>Today: "+date.toDateString()+"<br/>");
document.write(calculateAge(birthDay));

function calculateAge(birthDay){
    ageYears = date.getFullYear() - birthDay.getFullYear();

    if(date.getMonth() < birthDay.getMonth() || (date.getMonth() == birthDay.getMonth() && date.getDate() < birthDay.getDate())){
        ageYears--;
    }

    ageMonths = date.getMonth() - birthDay.getMonth();
    
    if(date.getDate() < birthDay.getDate()){
        ageMonths--;
    }

    if(ageMonths < 0){
        ageMonths+=12;
    }

    birthDay.setFullYear(date.getFullYear());
    birthDay.setMonth(date.getMonth());
    ageDays = (date.getTime()-birthDay.getTime())/(1000*60*60*24);

    if(ageDays < 0){
        ageDays+=new Date(birthDay.getFullYear()+ageYears, date.getMonth(), 0).getDate();
    }

    return "You are "+ageYears+" years, "+ageMonths+" months and "+Math.floor(ageDays)+" days old";
}
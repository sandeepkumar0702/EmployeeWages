const presentOrAbsent=Math.random();
let workHour;
let salary=0;
const salaryPerHour=20;
const workDaysInMonth=20;
function getWorkHour(){
    let hour=Math.floor(Math.random()*2)+1;
    let workHourInday;
    switch(hour){
        case 1:{
            workHourInday=4;
            break;
        }
        case 2:{
            workHourInday=8;
            break;
        }
        default:{
            workHourInday=0;
            break;
        }
    }
    return workHourInday;
}
if(presentOrAbsent<0.5){
    workHour=0;
    salary=0;
    console.log("Absent");
}
else{
    console.log("Present");
    const salaryPerHour=20;
    const totalWork=160;
    let day=2;
    while(day<=20 || workHour<160){
        let workHourInDay=getWorkHour();
        salary+=workHourInDay*salaryPerHour;
        workHour+=workHourInDay;
        day++;
    }
}
console.log(salary);
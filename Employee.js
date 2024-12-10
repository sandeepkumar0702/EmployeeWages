let workHour=0;
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

for(let i=0;i<20;i++){
    const presentOrAbsent=Math.random();
    let currSalary=0;
    let currWorkHour=0;
    if(presentOrAbsent<0.5){
    }
    else{
        currWorkHour=getWorkHour();
        workHour+=currWorkHour;
        currSalary=currWorkHour*salaryPerHour;
        salary+=currSalary;
    }
    console.log(`Workhour oN  ${i+1}th day = ${workHour}  and salary = ${salary}`);
}
console.log(`Workhour of month = ${workHour}  and salary = ${salary}`);
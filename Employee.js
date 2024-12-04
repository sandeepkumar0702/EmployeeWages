const presentOrAbsent=Math.random();
let workHour;
let salary;
if(presentOrAbsent<0.5){
    workHour=0;
    salary=0;
    console.log("Absent");
}
else{
    console.log("Present");
    const salaryPerHour=20;
    let hour=Math.floor(Math.random()*2)+1;
    switch(hour){
        case 1:{
            workHour=4;
            salary=workHour*salaryPerHour;
            break;
        }
        case 2:{
            workHour=8;
            salary=workHour*salaryPerHour;
            break;
        }
        default:{
            workHour=0;
            salary=workHour*salaryPerHour;
            break;
        }
    }
}
console.log(salary);
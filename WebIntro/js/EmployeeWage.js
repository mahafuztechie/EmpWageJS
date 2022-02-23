//UC1 IF ELSE CONDITION
{
    const IS_ABSENT = 0
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck == IS_ABSENT){
        console.log("Employee is Absent");
    }
    else{
        console.log("Employee is Present");
    }
}

//UC2  Switch Case
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
    {
        let empHrs = 0;
        let empCheck = Math.floor(Math.random() * 10) % 3;
        switch(empCheck){
            case IS_PART_TIME:
                empHrs = PART_TIME_HOURS;
                break;
            case IS_FULL_TIME:
                empHrs = FULL_TIME_HOURS;
                break;
            default:
                empHrs = 0;
        }
        let empWage = empHrs * WAGE_PER_HOUR;
        console.log("EmpWage:" + empWage);
    }

}

//UC3  Functions
{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    var WAGE_PER_HOUR = 20;
    
    function getWorkingHours(empCheck){
        switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
        }
    }   
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Hour:"+empHrs+ " EmpWage:" + empWage);
}
//uc4 for loop
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    for (let day = 0;day < NUM_OF_WORKING_DAYS; day++){
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHours(empCheck);
    }
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Hrs:" +totalEmpHrs+ "Emp Wage:" +empWage);
}
//UC5 While LOOP
{
    const MAX_HRS_IN_MONTH = 160;
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs =0;
    let totalWorkingDays =0;
    while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
        totalWorkingDays++;
        let empCheck = Math.floor(Math.random() * 10) %3;
        totalEmpHrs += getWorkingHours(empCheck);
    };
    let empWage = totalEmpHrs * WAGE_PER_HOUR;
    console.log("Total Days:" + totalWorkingDays+
        "Total Hrs:" +totalEmpHrs+ "EmpWage: "+ empWage);
}
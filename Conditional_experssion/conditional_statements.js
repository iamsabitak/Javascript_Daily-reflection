//if,if else,if else if 
let a = 10;
if (a > 9){
    console.log("you can't even think of driviving ")
}
else if (a<10 && a >=18){
console.log("you can now think of driving")
}
else{
console.log("you can drive")
}
//switch case
const day = 'day6'
switch (day) {
    case 'day1':
        console.log("Today is Sunday")
        break;
        case 'day2':
            console.log("Today is Monday")
            break;
            case 'day3':
                console.log("Today is Tuesday")
                break;
                case 'day4':
        console.log("Today is Wednesday");
        break;
        case 'day5':
        console.log("Today is Thursday");
        break;
        case 'day6':
        console.log("Today is Friday");
        break;
        case 'day7':
        console.log("Today is Saturday");
        break;
        default:
            console.log("Sorry we are out of days."); //Default value will print here
}
console.log("Have a good day")
//ternary operators
let b = 20;
console.log("you can", (b<=19? "not drive" : "drive"))
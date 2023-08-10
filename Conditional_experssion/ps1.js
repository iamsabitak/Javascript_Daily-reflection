// Q-1 program to know that your age lies between 10 and 20 or not using logical operators
let a = 10;
if (a <10 && a==20){
    console.log("Your age lies between 10 and  20")
}
else{
    console.log("Your age does not lies between 10 and 20")
}

//Q-2 demonstrate switch case statement
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

//Q-3 promgram to check if your number is divisible by 2 and 3 by using logical operators..
let x = 12;
if(x%2==0 && x%3==0){
    console.log("your number is devisible by 2 and 3")
}
else{
    console.log("your number is not devisible by 2 and 3")
}
//Q-4 program to print whether you can drive or not by using ternary operators.
let age = 10;
let b = (age>=19? "yo can drive" : "you cannot drive")
console.log(b)
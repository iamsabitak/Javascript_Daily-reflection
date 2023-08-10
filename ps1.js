const prompt = require("prompt-sync")();
let day = prompt("Enter day")
day = parseInt(day)
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
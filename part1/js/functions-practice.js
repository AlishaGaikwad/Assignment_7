//STEP 1
function halfNumber(num) {
    return "Half of " + num + " is " + (num/2) + ".";
}

//STEP 2
function squareNumber(num) {
    return "The result of squaring the number " + num + " is " + (num * num) + ".";
} 

//STEP 3
function percentOf(num1, num2) {
    const res =  (num1*100) / num2;
    return num1 + " is " + res + "% of " + num2 + ".";
}

//STEP 4
function findModulus(num1, num2) {
        const res =  num1 % num2;
        return res + " is the modulus of " + num1 + " and " + num2 + "." ;
}

//STEP 5
function sumNumbers(numbersArr){
    var sum = 0;
    numbersArr.forEach(element => {
        sum = sum + parseInt(element);
    });
    return "The total sum of all numnbers is " + sum + "."; 
}

function main() {
    var choice, num1, num2, numbersArray;
    do {
        choice = parseInt(window.prompt("Options:\n1: Half the given Number\n2: Square the given Number\n3: Percent of a Number\n4: Modulus of the Numbers\n5: Find the sum of Numbers\n6: Exit by entering other numbers"));
        switch(choice) {
            case 1: {
                num1 = window.prompt("Enter the number ");
                window.console.log(halfNumber(num1));
                break;
            }
            case 2: {
                num1 = window.prompt("Enter the number to be squared");
                window.console.log(squareNumber(num1));
                break;
            }
            case 3: {
                num1 = window.prompt("Enter the first number");
                num2 = window.prompt("Enter the second number");
                window.console.log(percentOf(num1, num2));
                break;
            }
            case 4: {
                num1 = window.prompt("Enter the first number");
                num2 = window.prompt("Enter the second number");
                window.console.log(findModulus(num1, num2));
                break;
            }
            case 5: {
                num1 = window.prompt("Enter the numbers separated by commas");
                numbersArray = num1.split(",");
                window.console.log(sumNumbers(numbersArray));
                break;
            }
            default: break
        }
    } while (choice >= 1 && choice <= 5)
}

main();
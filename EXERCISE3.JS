
//Exercise 3:Three numbers are not equal to each other.


// Step 1: Input
let num1 = 6;
let num2 = 15;
let num3 = 17;

// Step 2: Logic to find the largest
let largest;

if (num1 > num2 && num1 > num3) {
    largest = num1;
} else if (num2 > num1 && num2 > num3) {
    largest = num2;
} else {
    largest = num3;
}

// Step 3: Output
console.log("The largest number is: " + largest)


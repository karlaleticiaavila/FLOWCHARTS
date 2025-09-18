

// Exercise 4: Check if a triangle is possible

let a = 3;

let b = 3;
let c = 700;

if (a + b > c && a + c > b && b + c > a) {
    console.log("Triangle is possible");
} else {
    console.log("Triangle is not possible");
}
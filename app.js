// 1. Return the sum of two numbers
// Create a function that takes two arguments as functions and return their sum

function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(3, 5));


// 2. Convert hours into seconds
// Create a function that converts hours into seconds

function hoursIntoSeconds(hour) {
    return hour * 60 * 60;
}
console.log(hoursIntoSeconds(2));

// 3.Calculate the perimeter of a rectangle
// Create a function that takes lenght and width of a rectangle and return it's perimeter

function calcPerimeter(lenght, width) {
  return lenght * 2 + width * 2;
}
console.log(calcPerimeter(10, 20));

// 4. Calculate the area of the triangle
// Write a function that takes the base and height of a triangle and return it's area

function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height;
}
console.log(calcAreaOfTriangle(20, 20));

// 5.Extend a string
// Write a function that accepts a string and adds 'Frontend' onto the end of it

function appendFrontend(string) {
    return string + "Frontend";
}
console.log(appendFrontend('Apple'));

// 6.Greater than 100?
// Given two numbers, return true if the sum of both numbers is greater than 100.
// Otherwise, return false

function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100;
}
console.log(sumGreaterThan100(60, 50));

// 7.Less than or Equal to Zero?
// Write a function that accepts a number and returns true if it's less than or equal to zero, otherwise return false

function lessThanOrEqualToZero(number){
    return number <= 0;
}
console.log(lessThanOrEqualToZero(3));

// 8. Opposite boolean
// Given a boolean (true or false), return the opposite boolean

function oppositeBoolean(bool) {
    return !bool ;
}
console.log(oppositeBoolean(true));

// 9. Is not the number 0
// Given any element, return true if it's not the number 0

function isNotZero(element) {
    return element !== 0;
}
console.log(isNotZero(5));
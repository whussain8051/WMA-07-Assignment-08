// 1.Write a JS code to print numbers from 1 to 10
document.write("<h2>1.Write a JS code to print numbers from 1 to 10</h2>");

for (let a = 1;  a <= 10; a++) {
    document.write("<h2>" + a);
}

document.write("</br></br>");

// 2.Write a JS code to print Even numbers in given array
document.write("<h2>2.Write a JS code to print Even numbers in given array</h2>");

for (let b = 1; b <= 10; b++) {
    if (b % 2 == 0) {
        document.write("<h2>" + b);
    }
}

document.write("</br></br>");

// 3.Write a JS code to delete all occurrence of element in given array
document.write("<h2>3.Write a JS code to delete all occurrence of element in given array</h2>");

let arr = [1,2,1,3,4,5,5,6,3,2,2,3,4,1,2,3];
let res = [ ... new Set(arr)];

document.write("<h2>" + res);

document.write("</br></br>");


// 4.Write a JS code to find the power of a number using for loop
document.write("<h2>4.Write a JS code to find the power of a number using for loop</h2>");

let num = 3;
let power = 2;

document.write("<h2>" + "Power of Number is " + num ** power);

document.write("</br></br>");

// 5.Write a JS code to print a pattern using for loop
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6
// 1 2 3 4 5 6 7
// 1 2 3 4 5 6 7 8

document.write("<h2>5.Write a JS code to print a pattern using for loop</h2>");

document.write("<h2>");

for (let r = 1; r <= 8; r++) {
    for (let s = 1; s <= r; s++) {
        document.write(s);
    }
    document.write("</br>")
}

document.write("</br></br>");

// 6. Write a JS code to find the no of digits in a number

document.write("<h2>6.Write a JS code to find the no of digits in a number</h2>");

let Num = 567;


document.write("</br></br>");

// 7. Write a JS code to calculate the sum of digits in a number

document.write("<h2>7.Write a JS code to calculate the sum of digits in a number</h2>");

let number = 567;
let sum = 0;

while (number > 0) {
    let reminder = number % 10; // Output 5
    sum = sum + reminder; // 13+5=18
    number = Math.floor(number / 10); 
}
document.write("<h2>" + sum);

document.write("</br></br>");


// 8. Write a JS code to find the largest number in an array

document.write("<h2>8.Write a JS code to find the largest number in an array</h2>");

let array = [10,34,28,36,56,27];

array.sort();
array.reverse();

let largestNum = array[0];
document.write("<h2>Largest number in array is " + largestNum);

document.write("</br></br>");

// 9. Write a JS code to print the Fibonacci series for a given value of N

document.write("<h2>9.Write a JS code to print the Fibonacci series for a given value of N</h2>");

let firstNum = 0;
let secondNum = 1;

let N = 10;

for (let i = 0; i <= N; i++) {
    let valueN = firstNum + secondNum;
    document.write("<h2>" + valueN);
    firstNum = secondNum;
    secondNum = valueN;
}

document.write("</br></br>");


// 10.Write a JS code to find duplicate values in a given array

document.write("<h2>10.Write a JS code to find duplicate values in a given array</h2>");

let array2 = [1,1,2,2,,3,4,5,6,6,7,8];

let result = array2.filter(function(val,index){
    return array2.indexOf(val) !== index;
});

document.write("<h2>" + result);

document.write("</br></br>");

// 11. Write a JS code for Linear search algorithm
document.write("<h2>11.Write a JS code for Linear search algorithm</h2>");

let userData = [10,23,45,32,56,6,76];



document.write("</br></br>");


// 12. Write a JS code for Binary search algorithm
document.write("<h2>12.Write a JS code for Binary search algorithm</h2>");




document.write("</br></br>");

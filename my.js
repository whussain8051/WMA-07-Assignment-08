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


debugger;
var a=10;
var b=20;
console.log(`sum of ${a} and ${b}=${a+b}`);
console.log(`sub of ${a} and ${b}=${a-b} `);
console.log(`mult of ${a} and ${b}=${a*b} `);
console.log(`div of ${a} and ${b}=${a/b} `);
console.log(`remainder of ${a} and ${b}=${a%b} `);
console.log(`postincrement of ${a}:${a++} and postdecrement of ${b}=${b++} `);
console.log(`preincrement of ${a}:${++a} and predecrement of ${b}=${--b} `);
console.log(`postincrement of ${a}:${a++} and postdecrement of ${b}=${b++} `);
// if(a%2==0){
//     console.log(`${a} is even`)
// }
// else{
//     console.log(`${a} is odd`);
// }
console.log(`checking equality of ${a} and ${b}:${a==b}`);
console.log(`square of 11 is ${11**2}`);
console.log(`cube of 2 is ${2*2*2}`);
var num1=30;
var num2=50;
var num3=40;
var rangechecking=num3>=num1 && num3<=num2;
if(rangechecking){
    console.log(`${num3} lies between ${num1} and ${num2}`);
}
console.log(`bitwise AND of ${num1} and ${num2} is:${num1&num2}`);
console.log(`bitwise OR of ${num1} and ${num2} is:${num1|num2}`);

let age=25;
let status=age>18 ? 'adult':'minor';
console.log(status);



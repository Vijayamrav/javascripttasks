// let arr=Array.of(3); // Array.of is used to create an array with single element
// let arr1=new Array(3); //single parameter in Array function specified as length of the array
// console.log(arr.length);
// console.log(arr1.length);

// let names=new Array(5);
// console.log(typeof names[0]);
// console.log(names); // 5 empty items but not undefined
// let languages=new Array(5).fill(1);
// console.log(languages);

function getArgs(a,b,c) {
    return Array.from(a,b,c);
  }
  
  getArgs(1, 2, 3); // Output: [1, 2, 3]
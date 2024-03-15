// console.log(a); // here a is stored in temporal dead zone we cannot access a before assigning
//  let a=10;   
// console.log(a);
let a=10;
function myname(){
    a=30;
    console.log(a);
}
 myname();
console.log(a);


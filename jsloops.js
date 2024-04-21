const prompt=require('prompt-sync')();
var num1=+prompt("enter number1: ");
var num2=+prompt("enter number2: ");
var num3=+prompt("enter number3: ");
if(num1>num2 && num1>num3){
    console.log(`${num1} is greatest`);
    
}
else{
num2>num3 ? console.log(`${num2} is greatest`):console.log(`${num3} is greatest`);
}

// task2
var c=prompt('enter a alphabet: ');
if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||c=='A'||c=='E'||c=='I'||c=='O'||c=='U'){
    console.log(`${c} is vowel`);
}
else{
    console.log(`${c} is consonant`);
}

//task3
const hours=prompt("enter the currrent hour[24hourformat]: ");
if(hours>=5 && hours<=11)
  console.log("Good Morning");
else if(hours>=12 && hours<=15)
  console.log("Good Afternoon");
else if(hours>=18 && hours<22)
  console.log("Good evening");
else if(hours>=22 && hours<=24)
  console.log("Good Night");
else 
  console.log("go to sleep!");

  //task4
  const user=prompt("enter username: ");

  const pwd=prompt("enter password: ");
  if(user=='admin' && pwd=='admin123'){
    console.log("Login successful")
  }
  else{
    console.log('Login Failed');
  }


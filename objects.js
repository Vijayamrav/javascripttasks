var o_student={  // creating a object and storing data in key-value pairs
    // objects are non-primitive and mutable
    name:'vijay',
    rollno:0o4,
    group:'mca'


}
console.log(o_student['name']);
// o_student.name1='praveen';
// o_student.rollno1=11;
// o_student.group1='mca';
console.log(o_student);
var o_array=Object.entries(o_student); // converts object into an array
console.log(o_array);
console.log(o_array[0]);
var keys_array_of_o_student=Object.keys(o_student);// returns keys of object in an array
console.log(keys_array_of_o_student);
var values_of_o_student=Object.values(o_student); // returns values of keys in an array
console.log(values_of_o_student);
// to find the length of the object
// length method doesn't works for objects
// we have to convert object into array using entries method
var o_student_array=Object.entries(o_student);
var o_student_length=o_student_array.length;
console.log(o_student_length);

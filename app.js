// ************************************ JavaScript Loops ************************************

let v2 = 25
let v3 = 50

let obj = {
  name: "name1",
  age: 50,
  job: "Good Job",
  v1: true,
  fun1: function (fname, lname) {
    console.log(`${fname} ${lname} `);
  },
  nestedObj: {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  },
  arr1: [1, 2, 3, 4, 5, 6, 7, 8],
  val: v2,
  v3
};



console.log(obj);

console.log(obj.name);

console.log(obj.age);

console.log(obj.job);

console.log(obj.val);

console.log(obj.v3);

obj.fun1("jay", "vaghani");

console.log(obj.nestedObj.firstName);

console.log(obj.arr1[obj.arr1.length - 1]);

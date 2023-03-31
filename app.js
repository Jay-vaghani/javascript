// ************************************ JavaScript Loops ************************************

let v2 = 25;
let v3 = 50;

let obj = {
  name: "name1",
  age: 50,
  job: "Good Job",
  v1: true,
  fun1: function (fname, lname) {
    console.log(`${fname} ${lname} `);
  },
  nestedObj: {
    name: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  },
  arr1: [1, 2, 3, 4, 5, 6, 7, 8],
  val: v2,
  v3,

  // fun2: () => {
  //   console.log(this.name); //Will Give Empty Result
  // },

  // fun2: function () {
  //   console.log(this.name);
  // },
};

console.log(obj.nestedObj.name);

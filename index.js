var userInfo1;
/*
userInfo1 = () => {
  console.log("hello1");
};

userInfo1(); */
// let userInfo2: () => {};
//let userInfo3: () => string;
var userInfo2;
userInfo2 = function (name, age) {
    return "username: ".concat(name, ", age: ").concat(age);
};
console.log(userInfo2("abhishek", 21));

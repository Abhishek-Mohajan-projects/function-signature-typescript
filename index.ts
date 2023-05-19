let userInfo1: () => void;

/* 
userInfo1 = () => {
  console.log("hello1");
};

userInfo1(); */

// let userInfo2: () => {};
//let userInfo3: () => string;

let userInfo2: (name: string, age: number) => {};

userInfo2 = (name: string, age: number) => {
  return `username: ${name}, age: ${age}`;
};
console.log(userInfo2("abhishek", 21));

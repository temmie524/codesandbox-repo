// var val1 = "var111"

// console.log(val1)

// val1 = "car111"

// console.log(val1)

// let val2 = "let 変数"
 
// console.log("val2");

// const val4 = {
//   name:"toshi",
//   age:25,
// };

// console.log(val4.name)
// console.log(val4.age)

// const val5 = ["dog","cat"]

//配列なら追加可能
// val5.push("monkey")
// console.log(val5)

// const name = "Toshi";
// const age = 25;
// const message1 = 'I am ' + name + '. my age is ' +  age;

// console.log(message1);

// const message2 = ` Iam ${name}. My age is ${age}`;

// console.log(message2);

// const func1 = function(str){
//   return str;
// }
// console.log(func1("func1です"))

// // allow 
// const func2 = (str) => str;
// console.log(func2("func2です"))

// const func3 = (num1, num2) => {
//   return num1 + num2 
// }

// console.log(func3(1,10))

// const myProfile = {
//   name: "NAKASE",
//   age:25,
// };

// const message1 = `my name is ${myProfile}! My age is ${myProfile.age}`
// console.log(message1)

// const {name,age} = myProfile;
// console.log(`my name is ${name}! my age is ${age}`)

// const m = ["toshi", 25]

// const [a, b] = m;
// console.log(`${a} ${b}`);

// const s = (name) => console.log(`hello! ${name}`)

// s("sss")

// const arr = [1,2,3];
// // console.log(arr);
// // console.log(...arr);

// const func1 = (num1, num2, num3) => console.log(num1 + num2 + num3);
// func1(...arr)

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

// const arr4 = [10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4, ...arr5]
// console.log(arr6)

// const names = ["tanaka", "yamada", "ito"]

// for(let i = 0; i < names.length; i++){
//    console.log(`${i}番目は${names[i]}です`)
//  }

// // const nameArr = names.map((name)=>{
// //   return name;
// // })
// // console.log(nameArr)

// names.map((name, i) => console.log(`${i+1} is ${name}`))

// const nums = [1,2,3,4];
// const numsArr = nums.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(numsArr)

// const newNameArr = names.map((name) => {
//   if (name === "tanaka"){
//     return name
//   }else{
//     return `${name}san`
//   }
// })

// console.log(newNameArr  )

// const val1 = 1 > 0 ? 'true!' : 'false!'
// console.log(val1);

const num = '1300';
const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力しなさい'
console.log(formattedNum);

//2択の時に使える

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? '100超え'　: '100以下';
}
console.log(checkSum(1, 100))

const flag1 = true;
const flag2 = false;

if (flag1 || flag2){
  console.log("1 or 2 is true!")
}

if (flag1 && flag2) {
  console.log("false")
}else{
  console.log("true!!else")
};









































































//Q1.*****
// let arr = [2, 3, 4, 5, 6];

// let result = (arr)=>{
//     return arr[arr.length - 1];
// }
// console.log(result(arr)); // Output: 6

//Q2.*****
// let arr1= [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let result = arr1.concat(arr2)
// console.log(result);

// let result2 = [...arr1,...arr2]
// console.log(result2);

//Q3.***
// let randInt = Math.floor(Math.random()*19)
// console.log(randInt);

//Q4.****
// let arr = [2,4,6,1,"ram", "shyam","madhu"]
// let result =
// arr.filter(i=>{
//     // a.
//     // if (typeof i === 'string') {
//     //     return true
//     // }else{
//     //     return false
//     // }
//     // b.
//     // return typeof i === "string"
// })
// console.log(result);

//Q5.***
// let arr = [3,7,124,7]
// console.log(Math.max(...arr))

//Q6.***
// const obj = {
//     name: "sankha",
//     age: 24,
//     city:"uttarpara"
// }
// function getObjLength(object){
//     console.log(Object.keys(object).length);

// }
// getObjLength(obj)

// Q7.***
// let arr = [{
//     name: "sankha",
//     gender: "male"
// },
// {
//     name:"suvra",
//     gender:"female"
// },
// {
//     name:"srijan",
//     gender:"male"
// },
// {
//     name:"soura",
// },
// ]

// let result = arr.filter(obj=>{
//     return obj.gender === "male"
// })
// console.log(result);

//Q8.***
// let arr = ['sankha','soura','srijan']
// let result = arr.map(elem=>{
//     return(elem.toUpperCase());

// })
// console.log(result);

//Q9.***
// const obj = {
//     name: "sankha",
//     age: 24,
//     city:"uttarpara"
// }
// let isEmpty = Object.keys(obj).length < 1

// if(isEmpty){
//     console.log("empty");

// }else{
//     console.log("not empty");

// }

// Q10.***
// let arr = [2,45,67,5]

// let result = arr.map((elem) => elem * 2);
// console.log(result);

// Q11.***

// let arr = ["sankha", "suvra", "ghatak"]
// let result = arr.join()
// console.log(result);

// Q12.***
// let arr = [1,2,3,['a','b','c'],5,6,7]

// arr.splice(3,1,...arr[3])
// console.log(arr);
// OR....
// console.log(arr.flat(1));

// Q13.***
// let arr = [1,2,3,4,'he']
// let res = arr.every(i=>{
//     if(typeof i === 'number'){
//         return true
//     }else{
//         return false
//     }
// })
// console.log(res);

// Q14.***
// function isPrime(num) {
//   if (num === 0 || num === 1) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(2));

// Q15.***
// let arr = [1,1,2,2,4,5,6]
// function removeDuplicate(arr) {
//     // Method 1: Using Set (commented out)
//     // let set = new Set(arr)
//     // return [...set]
    
//     // Method 2: Using filter with indexOf
//     let resultArr = arr.filter((element,index)=>{
//         return arr.indexOf(element) === index
//     })
//     return resultArr;
// }
// console.log(removeDuplicate(arr));


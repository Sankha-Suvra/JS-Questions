
//1.
function sum(a,b,c){
    return a+b+c
}

console.log(sum.length); 
/*Output 3 | No Default Param
if set (a,b=2,c) then legth = 1 || only 1 parameter before a default value
if set (a,b,c=5) then legth = 2 || only 2 parameter before a default value
*/

//2. Destructuring default value
const {z=10} = {z:undefined} 
console.log(z); // Output: 10, bcz when undefined default value will be used

const {b=10} = {b:false}
console.log(b); // Output: null, bcz in case of all falsy values output will be the falsy values
//FALSY VALUES OF JS = Null, "" , 0, false, NaN


//3. this in arrow function

const obj = {
    name: 'sankha',
    greet: ()=>{console.log(`hello ${this.name}`);}
}
obj.greet() //output: hello undefined | arrow funcs doesnt have their own this, so it points to the global scope which is not present here.

//4. Clouser in loop

for (var i = 0; i < 3; i++) {
    setTimeout(()=> console.log(i),1000) //3,3,3
}
/* var is function scope, so all 3 callbacks points to the same i value which is 3
in case of let it is block scope, every callback gets a new i value */

//5. HOISTING
console.log(a);
var a = 5 // Output undefined 
//in case of let uninitialized error


//6. Logical (&& ||) short-circuiting

console.log(0 && 'sankha'); // AND Truth Table
console.log(0 || 'sankha'); // OR Truth Table

//7. implicit type coercion
console.log('5'- 2); // output: 3
console.log('5'+ 2); // output: 52
console.log(+'5'+ 2); // output: 7
console.log(+'5'+ 2 + true); // output: 8, + before bool converts to corresponding value
console.log('5'+ true); // 5true
console.log('5'- true); // 4
console.log('5'- null); // 5
console.log('5'- undefined); // NaN

//8. Promise chaining with return vs throw

Promise.resolve(1).then(x=>{throw x + 1}).catch(err => err+1).then(console.log);
/*
| Step         | State      | Value/Error |
|--------------|------------|-------------|
| `resolve(1)` | resolved   | `1`         |
| `throw x+1`  | rejected   | `2`         |
| `err+1`      | resolved   | `3`         |
| `console.log`| logs       | `3`         |
*/ 

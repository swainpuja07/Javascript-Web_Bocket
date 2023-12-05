/*Array is an object which can store similar type of data in a contigious memory location.
Array index start from 0. */

const myArr=[3,"Puja",5,6,7,8,9]
console.log(myArr[1]);

const mynewArray= new Array(1,2,3,4);
console.log(mynewArray);

const myArray=[1,2,3,4,5,6,7];
console.log(myArray)
myArray.push(8);
console.log(myArray);
myArray.pop();
console.log(myArray);

myArray.unshift(0);
console.log(myArray)
myArray.shift();
console.log(myArray)
/*unshift=add a new Elementin 1st index
shift=remove a element in 1st index */

console.log(myArray.includes(9));
console.log(myArray.indexOf(7));
console.log(myArray.indexOf(18));
console.log(myArray);

const demoArray=myArray.join();
console.log(demoArray)
console.log(typeof demoArray)
//join=basically works on converting an array to string


console.log("A","demoArray");
const myArr1=myArray.slice(1,3)
console.log(myArr1)
console.log("B","demoArray");
const myArr2=myArray.splice(1,3)
console.log(myArr2)

const cars=["Maruti","Alto","XUV","Wagnor"]
const supercars=["BMW","Audi","Defer","Mercedes","Tyota"]
//cars.push(supercars)
//console.log(cars);
//cars.concat(supercars)
//console.log(cars);
const allcars=cars.concat(supercars)
console.log(allcars);


const allnewcars=[...cars,...supercars];
console.log(allnewcars);
/*...=spread operator (add multiple items in one object*/

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realAnothoArray=anotherArray.flat(Infinity);
console.log(realAnothoArray);
/*flat- add infinity loop into one bracket */

console.log(Array.isArray("Pujarani"))
console.log(Array.from("Pujarani"))
/* -> isarray is a method to check whether it is an array or not.
-> from is a method in which we create that is automatically creates an array.*/
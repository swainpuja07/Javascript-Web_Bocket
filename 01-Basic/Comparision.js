console.log(2>1)
console.log(2>=19)
console.log(2<1)
console.log(2==1)
console.log(2!=1)
console.log("2">1)
console.log("02">1)
console.log(null>0)
console.log(null==0)
console.log(null>=0)


/* 1.The reason is that an equality check == and Comparision ><>=<= work differently.
2.The Comparision convert null to a number treating as 0, that why (3) null>=0 is true and (1) null>0 is false.
*/

console.log(undefined==0);
console.log(undefined>0);
console.log(undefined<0);
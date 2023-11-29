/* 1.Variable are container for storing data.
2.Javascript variable can be declared in 4 ways.
    i.Automatically
    ii.Using Var
    iii.Using Let
    iv.Using const
3.The var keyword was used in all javascript code from 1995-2015.
4.The let and const keyword were added to javascript in 2015.
5.The var keyword should only be used in code written or older browser.
6.Let is blocked scope where as var is function scope.
*/
const accountId=334;
let accountEmail="Pujarani@gmail.com";
var accountpassword="12345";
accountcity="Bhubaneswar";
let accountState;

console.log("accountId=", accountId);
console.log("accountEmail=",accountEmail);
console.log("accountpassword=",accountpassword);
console.log("accountcity=",accountcity);
console.log("aacountState=",accountState);

console.table([accountId,accountEmail,accountpassword,accountcity,accountState]);


console.log(accountId);
console.log(accountEmail);
console.log(accountpassword);
console.log(accountcity);
console.log(accountState);

/* 1.To be able to operate on variable,it is important to know something about the types of data is called Datatypes.
2.Javascript has 7 types of datatypes.
    a.Number:-2^53
    b.Bigint:-832892*N
    c.String:- ""
    d.Boolean:-True/false
    e.Null:0,[]
    f.Undefined:-not defined
    g.Symbol:-Uniqueness
*/

let name="Pujarani";
let Age=21;
let ispresent= true;
let state;
let number="";
let x= BigInt(123456789012345678901234567890);
 console.log(typeof name);
 console.log(typeof Age);
 console.log(typeof ispresent);
 console.log(typeof state);
 console.log(typeof number);
 console.log(typeof x);

 let Idname=Symbol('123');
 let anotherId=Symbol('123');
 console.log(Idname===anotherId);
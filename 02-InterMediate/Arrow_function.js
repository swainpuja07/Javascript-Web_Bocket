// //Arrow function-
// **In ES6 major update had done.It changes the old syntax of function declaration and tried to reduce the length of a code.
// **In arrow function we need a variabkle to declaire it and majorly used => this operator to define arrow function.


function addTwoNumber(num1,num2){
    return num1+num2;
}
console.log(addTwoNumber(5,5));
//arrow function

const user={
    userName:"Pujarani",
    location:"BBSR",
    welcomeMessage : function(){
        console.log(`${this.userName},Good Morning`);
        console.log(this);
    }
}
user.welcomeMessage();
user.userName="Jyoti";
user.location="Bargarh";
user.welcomeMessage();

const person ={
    name : "Puja",
    age : 20,
    loginDays : ["Sunday","Monday","Tuesday","Thursday"],
    username :{
        userDetails :{
            fname :"Jyoti",
            lname:"Mohapatra",
        }
    }
};
console.log(person.username.userDetails.fname);
console.log(person);


const userDetails = ()=> {
    let username="Puja"
    console.log(username);
}
userDetails("");

// const addTwoNumber = () =>{
//     return num1 + num2;
// }
// const addTwoNumber={num1,num2} => num1+num2;
// //
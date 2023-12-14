function sayname(){
    console.log("P");
    console.log("U");
    console.log("J");
    console.log("A");
}
//sayname();
//sayname:- Reference
//():-Execution

// function addTwoNumber(Number1,Number2){ //Parameter
//     console.log(Number1+Number2)
// }
// //addTwoNumber(3,"a");    //argument

// function addTwoNumber1(Number1,Number2){
//     let result=Number1+Number2;
//     return result;
// }
// const result=addTwoNumber1(3,5);
// console.log("result :",result);

// function loginUserMessage(username){
//     return `${username} just Logged in`
// }
// console.log(loginUserMessage("Puja"));

// function loginUserMessage(username){
//     if(username === undefined)
// {
//     console.log("Please enter your username")
// }
// else{
//     return `${username} just logged in`;
// }
// }
// loginUserMessage();

// function loginUserMessage(username="Puja"){
//         if(!username)    //!covert true to false or false to true
//         {
//             console.log("please enter your username")
//             return
//         }
//         return `${username} just logged in`;
//     }
//     console.log(loginUserMessage("Jyoti")); 
    

    // function calculatePrice(...num1){      //...-rest operator
    //     return num1;
    // }
    // console.log(calculatePrice(200,300,400,500));

    
    // function calculatePrice(val1,val2,...num1){      //...-rest operator
    //     return val1;    //multiple value can't return ones a time
    // }
    // console.log(calculatePrice(200,300,400,500));

    const user={
        username:"Puja",
        price:400
    }
    function handleobject(anyObject){
        console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    }
    handleobject(user);


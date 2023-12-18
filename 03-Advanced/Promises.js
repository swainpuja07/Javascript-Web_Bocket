// var ans=new Promise((Res,Rej) =>{
//     if(false){
//         return Res();
//     }
//     else{
//         return Rej();
//     }
//     })
// ans.then(function(){
//         console.log("Resolve the condition");
// })
// .catch(function(){
//     console.log("Rejected the condition");
// })

/* 1.User will ask for a number between 0 to 9 and if the number is below 5 relove of not reject.
    2.i.reach the house
    ii.open the gate 
    iii.prepare food and have that
    iv.scroll instagram reels
*/
// var a=0;
// var ans=new Promise((Res,Rej) =>{
//     if(a<5){

//         return Res();
//     }
//     else{
//         return Rej();
//     }
//     })
// ans.then(function(){
//         console.log("Resolve the condition");
// })
// .catch(function(){
//     console.log("Rejected the condition");
// })

// var ans =new Promise(function(res,rej){
//     return res("Reach the house");
// })
// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res,rej){
//         return res("Open the gate")
//     })
// })
//     var p3 = p2.then(function(data){
//         console.log(data);
//         return new Promise(function(res,rej){
//             return res("Prepare food and have that")
//         })
//     })
//         var p4 = p3.then(function(data){
//             console.log(data);
//             return new Promise(function(res,rej){
//                 return res("Scrolling instgram reels")
//             })
//     })
//     var p5=p4.then(function(data){
//         console.log(data);
// })


// const promisesEx3 = new Promise(function(res,rej) {
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             res({username: "Puja" , password: "1234"})
//         }
//         else{
//             rej('ERROR: Something went wrong')
//         }
//     },2000)
// })
// NewpromisesEx3()
// async function NewpromisesEx3(){
//     try{
//         const response =await promisesEx3
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }



// promisesEx3.then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// })


// async function getA1Users(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch{
//         console.log("E: ", error);
//     }
// }
// getA1Users()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error) => console.log(error))
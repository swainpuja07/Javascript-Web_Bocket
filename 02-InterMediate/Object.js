/*Object are super important for grouping the data and functionalities so we can do a lot of things in object of js.
Object are constructed in key and value pair.
let mycars={
        !    BMW:"Series 7",     
        !    Audi:"Q7", !----------value
        !       !
        !       --------Key
}    name of the Object
*/

const jsUser={
            name:"Puja",
            email:"Puja@gmail.com",
            "Full name":"Pujarani",
            age:22,
            location:"Odisha",
            isLoggedIn:"False",
            lostLoggedinDays:["Monday","Tuesday"]
}
    console.log(jsUser.name);
    console.log(jsUser["email"]);
    console.log(jsUser["Full name"]);
    console.log(jsUser["location"]);
    console.log(jsUser["isLoggedIn"]);

    jsUser.email="JyotiPuja@gmail.com";
    // Object.freeze(jsUser);
    jsUser.email="Jyoti@gmail.com";
    console.log(jsUser.email);
    jsUser.location="Bargarh";
    //Object.freeze(jsUser);
    console.log(jsUser.location);

    jsUser.geek=function(){
        console.log("Hello future goal");
    }
    jsUser.geektwo=function(){
        console.log(`Hello jsUser,${this.name}`);
    }
    jsUser.geek();
    jsUser.geektwo();

    const tinderUser={}
    tinderUser.id="1234",
    tinderUser.email="Puja@gmail.com",
    tinderUser.name="Puja",
    console.log(tinderUser.id);
    console.log(tinderUser.email);
    console.log(tinderUser.name);
    


    const regularUser={
                    email:"Pujarani@gmail.com",
                    Fullname:{
                        UserFullname:{
                            Firstnmae:"Pujarani",
                            lastname:"Swain"
                              }      
                }
    }
 console.log(regularUser.Fullname.UserFullname);

 const obj1={
    1:'a',
    2:'b',
 }
 const obj2={
    3:'a',
    4:'b',
 }
 const obj3={
    5:'a',
    6:'b',
 }
 const obj4={obj1,obj2,obj3}
 console.log(obj4)
 const obj5={...obj1,...obj2,...obj3}
 console.log(obj5)
 

 //Object Destructuring
 const course={
    courseName:"Last minute placement",
    price:999,
    courseInstructor:"Puja"
}
const{courseInstructor:teacher}=course
console.log(teacher);


//json-(javascript object notation)to help for storing data in our local disk and we can manipulate these data also in one place to another place.
//API-(Application programming interface)it is a mechanism that enables two software components to communicate with each other using a set of defination and protoclos.
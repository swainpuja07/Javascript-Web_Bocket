//condition statement

/* Condition statement are those who create condition on wheather you goes this side you goes another side like that
    1.if - if condition true then statement is true otherwise it will false

    if(condition)
    {
        statement
    }
*/

    var a=12;
if(a<18)
{
    console.log("They did not give vote");
}
/*
    2.if-else - if condition is satisfy 
        
        if{
            statement
    }
    else{
        statement
    }
    */
    var a=19;
    if(a%2==0){
    console.log("even");
    }
        else{
            console.log("Odd");
    }
    
/*
    3.if else-if else-if else - in that we add multiple case simultaneously to check the condition where we get executed.

    if{
            statement
    }
    else if{
        statement
    }
    else if{
        statement
    }
    else{
        statement
    }
*/

const balance=1000;
if (balance < 500){
    console.log("Less than 500");
}
else if (balance < 700){
    console.log("Less than 700");
}
if (balance < 900){
    console.log("Less than 900");
}
else{
    console.log("Less than 1200");
}
/*4.Switch - a part of javascript conditional satement where we execute different statement depend on the condition that they check.
 switch(key){
    case:value
    break;
  case:value
    break;
     case:value
    break;
     case:default
    break;
 }
 
*/

const month= "mar";
switch (month){
    case "jan":
        console.log("January")
        break;
        case "feb":
            console.log("February")
            break;
            case "mar":
        console.log("March")
        break;
        case "may":
        console.log("May")
        break;
        default:
        console.log("default")
        break;
}
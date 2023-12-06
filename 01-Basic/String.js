const Name = "Pujarani";
console.log(Name);
const count = 50;
console.log(Name + count);
console.log(`My name is ${Name}`);         
//`` backtics symbol


const name = new String("Pujarani");          
//through object
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('r'));
console.log(name.charAt(4));


const newName = name.substring(0,4);
console.log(newName);


const myName = "     gift    "; 
console.log(myName);
console.log(myName.trim());
//trim-remove white space


const anotherName  =name.slice(0,4);
console.log(anotherName);
//slice-return the selected element


const url = "www.webbocket.com";
console.log(url.replace("com", "in"));
//replace-replace the element


const demo="gift-is-a-good-college";
console.log(demo.split('-'));
 //split method
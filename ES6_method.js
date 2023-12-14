//filter

const myArray= [1,2,3,4,5,6,7,8]
const myFilterArray = myArray.filter((item) => {
    return item > 4
})
console.log(myFilterArray);

//filtering using foreach

const filterArray = myArray.forEach( (data) => {
    if(data>5){
       // return data
        console.log(data)
    }
})
//console.log(filterArray);

//Map method

const arrayNumbs=[2,4,6,8,10]
const changedArray =arrayNumbs.map( (value) => {
    return value+2;
})
console.log(changedArray);

//chaining

const chainingArray=[3,4,5,6,7,8,9,10]
const updatearray =chainingArray
                                .map((data)=> data+10)
                                .map((data)=> data*10)
                                .filter((data)=> data>150)
console.log(updatearray);

//reduce method

const arrOfNum=[1,2,3,4,5]
const reduceArray= arrOfNum.reduce(function(accumulator,curentvalue){
    console.log(`accumulator ${accumulator} and ${curentvalue}`)
    return accumulator + curentvalue
},5)
console.log(`Our final value = ${reduceArray}`);

//reduce method using arrow function

const modifiedArray= arrOfNum.reduce((acc,currval) => acc + currval,0)
console.log(`Our reduced array = ${modifiedArray}`);

const books= [
    {title: 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1982, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1968, edition: 2007},
    {title: 'Book Four', genre: 'Science', publish: 1985, edition: 2016},
    {title: 'Book Five', genre: 'Hitory', publish: 1981, edition: 2017},
    {title: 'Book Six', genre: 'Non-Fiction', publish: 1980, edition: 1996},
    {title: 'Book seven', genre: 'Fiction', publish: 1984, edition: 2005},
    {title: 'Book Eight', genre: 'Fiction', publish: 1975, edition: 2003},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 2011, edition: 2002},
    {title: 'Book Ten', genre: 'Fiction', publish: 1972, edition: 2004},
];
const findgenre =books.filter( (fg) => fg.genre ==='Non-Fiction')
//console.log(findgenre);
const filterData= books.filter( (fd) => {return fd.genre ==='History' && fd.edition >=2006})
console.log(filterData); 

//set method

//How to create a set?

const mySet = new Set();

//Add elements to the set
mySet.add(4);
mySet.add(6);
mySet.add(6);
mySet.add(8);
mySet.add(6);
mySet.add(7);
mySet.add(9);
mySet.add(10);
 console.log(mySet);

 //How to get length or size of set
const mySetSize=mySet.size;
 console.log(mySetSize);

//delete an element from the set
const deleteElement=(mySet.delete(7));
console.log(deleteElement);
console.log(mySet);

//check elementis existing or not
console.log(mySet.has(8));



console.log("Chapter 6: Arrays");
//Arrays inherit from Array.prototype
//creating an array
//1. using array literal
//2. Using ... spread operator on an iterable
//3. Using Array() constructor
//4. Using Array.of() and Array.from() methods

//Array literal
let empty=[];
let primes=[2,3,5,7,11];
let misc=[1.1,true,"a"];
let base=1024;
let table=[base,base+1,base+2,base+3];
//containing objects
let b=[[1, {x:1,y:2}],[2, {x:3,y:4}]];

//Array literal containing empty slots is called as sparse array
let count=[1,,3];
let undefs=[,,]; //2 empty slots (last is considered as trailing comma)
console.log(undefs);

//The Spread Operator
let a=[1,2,3];
b=[0,...a,4];
console.log(b);

//Spred operator to copy an array
let a1=[1,2,3];
let a2=[...a1];
a2[0]=5;
console.log(a1); //1,2,3 not changed

let digits=[..."0123456789ABCDEF"];
console.log(digits);

let letters=[..."hello world"];
console.log([...new Set(letters)])

//Array constructor
let a3=new Array();
//empty array with no elements and is equivalent to []
let a4=new Array(10); //array with 10 empty slots
console.log(a4.length)
//2 or more array elements or a single non-numeric element for the array
a=new Array(5,4,3,2,1,"testing");
console.log(a); //directly creates the array

//Array.of() method
//when array is created with Array() constructor, it creates an array with the given number of elements
//if second argument is given, it is used as the value of all the elements
//hence it cannot be used to create an array with a single numeric element

//Array.of() solves this problem
let a5=Array.of(1,2,3);
console.log(a5);
let a6=Array.of(1);
console.log(a6);

//Array.from() method
//Array.from(iterable) works like a [...iterable] spread operator
let copy=Array.from(a5);
console.log(copy);
let trueArray=Array.from("Hello");
console.log(trueArray);
//function as second argument
let a7=Array.from([1,2,3],x=>x+x);
console.log(a7); //same as map


//Reading and Writing Array Elements
a=["World"];
let value=a[0];
console.log(value);
a[1]=3.14;
console.log(a[1]);
console.log(a[2]); //undefined
let i=2;
a[i]=3;
a[i+1]="hello";
a[a[i]]=a[0];
console.log(a);

console.log(a.length); //4

let o={};
o[1]="one";
console.log(o["1"]); //one
//Array indexes are always converted to numbers
console.log(a["2"]); //3

a[-1.23]=true;
console.log(a); //Creates a property with name -1.23
console.log(a[-1.23]); //true
a["1000"]=0;
console.log(a);//Creates a 1001 element array with 1000 empty slots and 1001st element as 0
console.log(a.length); //1001
a[1.000]=1;
console.log(a); //Same as a[1]=1

//No notion of out of bounds error
a=[true, false];
console.log(a[3]); //undefined
console.log(a[-1]); //undefined

//Sparse arrays
//Do not have contiguous indexes starting from 0
a=new Array(5);//no elements, but a.length is 5
console.log(a.length); //5
a=[]; //empty array and length is 0
a[1000]=0; //length is 1001 and 1000 empty slots
console.log(a.length); //1001

//also with delete operator
//Array implemented with spare are typically slower than dense arrays
a1=[,]; //no elements, but length is 1
console.log(a1.length)
a2=[undefined] //one undefined element
console.log(0 in a1); //false
console.log(0 in a2); //true

//Array length property
console.log([].length)
console.log(['a', 'b', 'c'].length)

//Length is greater than the highest index
a=[1,2,3,4,5];
a.length=3;
console.log(a) //[1,2,3]
a.length=0;
console.log(a) //[]
a.length=5;
console.log(a) //[empty x 5]

//Adding and Deleting Array Elements
a=[];
a[0]="zero";
a[1]="one";
console.log(a.length); //2

//using push
a=[];
a.push("zero");
a.push("one","two");
console.log(a); //["zero","one","two"]

//using unshift
a=[];//adding elements to the beginning of the array
a.unshift("one");
a.unshift("zero");
console.log(a); //["zero","one"]

//using pop
a=["zero","one","two"];
let popped=a.pop();
console.log(popped); //two

//using shift
a=["zero","one","two"];
let shifted=a.shift();
console.log(shifted); //zero

//using delete
a=["zero","one","two"];
delete a[1];
console.log(a); //["zero",undefined,"two"]

//splice method - to add or remove elements from an array
//splice(start, deleteCount, item1, item2, ...)
//start - index at which to start changing the array
//deleteCount - number of elements to remove from the array
//item1, item2, ... - elements to add to the array
a=["zero","one","two","three"];
let removed=a.splice(2,1);
console.log(a); //["zero","one","three"]
console.log(removed); //["two"]

//Iterating over an array   
letters = [..."Hello World"];
let string="";
for (let l of letters){
    string+=l;
}
console.log(string);
a=new Array(letters);
console.log(a);

//know the index of the element using entries() in for...of loop
a=["zero","one","two","three"];
for (let [position, entry] of a.entries()){
    console.log(position);
    console.log(entry);
}
 //using forEach
a.forEach((entry, position) => {
    console.log(entry);
    console.log(position);
});
let upperCase="";
letters.forEach((entry, position) => {
    upperCase+=entry.toUpperCase();
});
console.log(upperCase);

//using for loop
a="hello world";
let vowels="";
for (let i=0; i<a.length; i++){
    letter = a[i];
    //using ternary operator
    letter=="a" || letter=="e" || letter=="i" || letter=="o" || letter=="u" ? vowels+=letter : null;
}
console.log(vowels);

//reversing with for loop
a=["zero","one","two","three"];
for (let i=0, j=a.length-1; i<j; i++, j--){
    let temp=a[i];
    a[i]=a[j];
    a[j]=temp;
}
console.log(a);

//Multidimensional Arrays
//Using array of arrays
table=new Array(10);
for (let i=0; i<table.length; i++){
    table[i]=new Array(10); //each element is an array of length 10
}
//creates a 10x10 array
for (let row=0; row<table.length; row++){
    for (let col=0; col<table[row].length; col++){
        table[row][col]=row*col;
    }
}
console.log(table[5][7]);

//Array methods
//Iterator
//Stack and Queue
//Subarray
//Searching and Sorting
//Concatenation
//Array to String


//Iterator
//forEach()
//Arguments: items, index, array

//map() method
//For each element in the array, call a function and return an array of the results
a=[1,2,3];
console.log(a.map(x => x*x)); //[1, 4, 9]
//returns a new array
//function not called for missing elements and will be sparse - same length as original array

//filter() method
//returns a subset of the array - a function that you pass should return true or false
a=[5,4,3,2,1];
console.log(a.filter(x => x<3)); //[2,1]
console.log(a.filter((x,i) => i%2==0)); //[5,3,1]
//filter always skips missing elements
dense = a.filter(() => true);

//remove undefined and null elements
a=[5,4,3,undefined,2,null,1];
console.log(a.filter(x => x!==null && x!==undefined)); //[5,4,3,2,1]

//Find and FindIndex
//find() method - searches only truthy values
//find() returns matching element and returns only the first match
//findIndex() returns the index of the first match
a=[1,2,3,4,5];
console.log(a.find(x => x===3)); //3
console.log(a.findIndex(x => x<0)); //-1
console.log(a.find(x => x%2===0)); //2
console.log(a.findIndex(x => x%2===0)); //1

//every() and some() methods
//every() is like for all, returns true if all elements match the condition
//some() is like for any, returns true if any element matches the condition
a=[1,2,3,4,5];
console.log(a.every(x => x<10)); //true
console.log(a.every(x => x%2===0)); //false - not all elements are even
console.log(a.some(x => x%2===0)); //true - some elements are even
console.log(a.some(isNaN)); //false - NaN is falsy

//reduce() and reduceRight() methods
//reduce() method - takes a function and an optional initial value
//reduceRight() method - same as reduce but starts from the end of the array
//function takes two arguments - the previous value and the current value
//the first time the function is called, previous value is the initial value or the first element of the array
a=[1,2,3,4,5];
console.log(a.reduce((x,y) => x+y, 1)); //15+1=16 1 is the initial value
console.log(a.reduce((x,y) => x+y)); //15
console.log(a.reduceRight((x,y) => x-y)); //-5
console.log(a.reduce((x,y)=>x*y)); //120
console.log(a.reduce((x,y)=>(x>y)?x:y)); //5 - maximum value
a=[2,3,4]
console.log(a.reduceRight((acc,val)=>Math.pow(val,acc))); //2^(3^4)=2^81
//process from right to left

//Flattening with flat and flatMap
console.log([1,2,3,[4,5]].flat()); //[1,2,3,4,5]
console.log([1,2,3,[4,5,[6,7]]].flat()); //[1,2,3,4,5,[6,7]]

a=[1,[2,[3,[4,[5]]]]];
console.log(a.flat(Infinity)); //[1,2,3,4,5] - flattens all the way
console.log(a.flat(1)); //[1,2,[3,[4,[5]]]] - flattens only one level
//a.flatMap(f) is the same as a.map(f).flat()
let phrases=['hello world','goodbye world'];
console.log(phrases.flatMap(x => x.split(' '))); //['hello', 'world', 'goodbye', 'world']
console.log([-2,-1,1,2].flatMap(x=>x<0?[]:Math.sqrt(x))) //[1, 2**0.5]

//Adding array with concat()
a=[1,2,3];
console.log(a.concat(4,5)); //[1,2,3,4,5]
console.log(a.concat([4,5])); //[1,2,3,4,5] //flattens the array
console.log(a.concat([4,5],[6,7])); //[1,2,3,4,5,6,7]
console.log(a.concat(4,[5,[6,7]])); //[1,2,3,4,5,[6,7]] //but not nested arrays

//push or splice is faster than concat
//concat creates a new array and copies all the elements
//push and splice modify the original array

//Stacks and QUEUES with push(), pop(), shift(), unshift()
//push does not flatten
let stack=[];
stack.push(1,2);
console.log(stack); //[1,2]
stack.pop(); //2
console.log(stack); //[1]
stack.push(3); //[1,3]
stack.push([4,5]); //[1,3,[4,5]]
console.log(stack.pop()); //[4,5]
console.log(stack); //[1,3]

//Spread operator to flatten and push
stack.push(...[4,5]); //[1,3,4,5]
console.log(stack); //[1,3,4,5]

//Subarray with slice(), splice(), fill(), and copyWithin()

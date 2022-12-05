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
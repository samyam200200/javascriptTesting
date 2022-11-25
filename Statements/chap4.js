//Expressions - Evaluated to produced value - used in chap3
//Statements - Perform actions - used in chap4

//Conditional Logic - if, else if, else
//loops - for, while, do while
//jump statements - break, continue, return

//Expression Statements
greeting = "Hello" + name;//Expression
console.log(greeting);
i=1;
i *= 3//have side effects
console.log(i)

//++ and -- related to assignment statement
//counter++;
//delete o.x;
//function call
x=1
cx=Math.cos(x)

//Compound and Empty statements
//comma operator combines multiple statements into a single compound statement
{
    x=Math.PI;
    cx=Math.cos(x);
    console.log(cx);
}
//empty statement
;
//Another with initialization of array
var a=[,,,,,,,,,];
for(let i=0;i<a.length;a[i++]=0); //empty statement
console.log(a);

b=1;
if(a==0||b==0);//this statement does nothing as ; is included in the end
    o=null;

//Conditional
//if (expression)
//  statement
username="admin";
if (username==null)
    username="John Doe";

//if jas more than one statement, use block
if (username==null){
    username="John Doe";
    console.log("username is null");
}

//if (expression){
//  statement1
//} else {
//  statement2
//}
//else is part of nearest if statement
i=j=1;
k=2;
if (i===j)
    if (j===k)
        console.log("i equals k");
else
console.log('i does not equal j'); //this is wrong

//Use blocks
//else if
n=1
if (n===1){
    //statement
} else if (n===2){
    //statement
}else if (n===3){
    //statement
}else {
    //statement
}

//Switch
//switch(expression){
//  case value1:
//      statement1
//      break;
//  case value2:
//      statement2
//      break;
//  default:
//      statement3
//}
switch(n){
    case 1:
        console.log("n is 1");
    case 2:
        console.log("n is 2");//this too runs as break is not provided in case 1
        break;
    default:
        console.log("n is not 1 or 2");
        break;
}
//break causes switch to exit or jump to end

function convert(x){
    switch(typeof x){
        case "number":
            return x.toString(16); //hex
        case "string":
            return '"' + x + '"'; //enclosed in quotes
        default:
            return String(x); //convert to any type in usual way
    }
}
console.log(convert(10));

//switch statement evaluates expression once and compares it to each case using the strict equality operator
//if no match, default is executed - default is optional and can be placed anywhere
//if no break, execution continues to next case

//loops
//while
//while (expression)
//  statement
let count = 0;
while (count < 10){
    console.log(count);
    count++;
}

//do while
//same as while but executes statement at least once as condition is checked at the end
//do statement while (expression)
function printArray(a){
    let len=a.length, i=0;
    if (len==0){
        console.log("empty array");
    } else {
        do{
            console.log(a[i]);
            i++;
        }while(i<len);
    }
}
printArray([1,2,3,4,5]);

//for loop
//for (initialization; condition; final-expression) / (initialize, test, increment)
for (let count=0;count<10;count++){
    console.log(count);
}
i,j,sum=0;
for (i=0,j=10;i<10;i++,j--){
    sum+=i*j;
}
console.log(sum)

//for of
//for (variable of iterable)
//iterable is an object that defines a method whose key is Symbol.iterator
//for of loop iterates over the values of the iterable object
//for of loop is not supported in IE
let data=[1,2,3,4,5];
sum=0;
for (let value of data){
    sum+=value;
}
console.log(sum);

function tail(o){
    for (;o.next; o=o.next)//return tail of linked list o - traverse while o.next is true
    return o;
}

o={x:1, y:2, z:3};
let keys = "";
for (let key in Object.keys(o)){
    keys += key + ", ";
}
console.log(keys);

let pairs="";
for (let[k,v] of Object.entries(o)){
    pairs += k + " = " + v + ", ";
}
console.log(pairs);

//Strings are iterable character sequences
//for of loop iterates over the characters of a string
let frequency = {};
for (let ch of "mississippi"){
    if (frequency[ch]){
        frequency[ch]++;
    } else {
        frequency[ch]=1;
    }
}
console.log(frequency);

//for/of with Set and Map
let text = "Na na na na na na na, na na na na, hey Jude.";
let wordSet = new Set(text.split(" ")); //Set of unique words
let unique=[];
for (let word of wordSet){
    unique.push(word);
}
console.log(unique);

//Map
let m = new Map([["name", "John Doe"], ["age", 42]]);
for (let [key, value] of m){
    console.log(key + " = " + value);
}

//print two array elements together
a = [1,2,3,4,5];
b = ["a", "b", "c", "d", "e"];
c=[]
for (let i=0; i<a.length; i++){
    console.log(i)
    c.push([a[i], b[i]])
}
console.log(c)

//Asynchronous iteration with for/await
//called as Asynchronous iterator
async function printStream(stream){
    for await(let chunk of stream){
        console.log(chunk);
    }
}

//for/in looks like for/of loop
for (let p in o){
    console.log(o[p])
} 
//evaluates o - if it evaluates to null or underfined the interpreter skips the loop

o = {x:1, y:2, z:3}
a = [], i=0;
for (a[i++] in o); //empty;
console.log(a)

for(let i in a) console.log(i);//JS array are like object - enumerated with a for/in loop

//working with array always use for of
for(i in a) console.log(i);

//jump statement
//continue - skip to next iteration
//break - exit loop
//return - exit function
//throw - throw generator object- work with try catch finally

//labelled Statements
//identifier: statement
//useful in statements with nested loops
token =null;
mainloop: while(token !== null){
    //code
    continue mainloop;
    //code
}
//labelled statement themselves may be labelled

//break
taget="y";
for (let i=0; i<a.length; i++){
    if (a[i]===taget) break;
    console.log(a[i]);
}
//can also use break labelname;

let matrix=[[1,2,3],[4,NaN,6],[7,8,9]];
sum=0;
success=false;

computeSum : if (matrix) {
    for (let i=0; i<matrix.length; i++){
        let row = matrix[i];
        if (!row) break computeSum;
        for (let j=0; j<row.length; j++){
            let cell = row[j];
            if (!cell) break computeSum; //can be used to break out of nested loops
            sum+=cell;
        }
    }
    success=true;
}

console.log(success, sum);

computeSum1: if (matrix) {
    for (let i=0; i<matrix.length; i++){
        let row = matrix[i];
        if (!row) break computeSum1;
        for (let j=0; j<row.length; j++){
            let cell = row[j];
            if (!cell) break; //only breaks the inner loop
            sum+=cell;
        }
    }
    success=true;
}

console.log(success, sum);


//continue
//continue labelname
//continue with labelname skips to the next iteration of the loop with that labelname

//continue can have different effect depending on where it is used
//if used in a while loop, it skips the rest of the loop body and goes back to the top of the loop - testing again
//do while loop - skips the rest of the loop body and goes to bottom for testing again
//for loop - skips the rest of the loop body and goes to the update (or increment) expression
//for of or for in loop - starts with the next iteration of the loop

for (let i=0; i<data.length; i++){
    if (!data[i]) continue; //skip null or undefined values
    console.log(data[i]);
}

//return statement
//return expression
function square(x) {return x*x} //return statement without expression returns undefined
console.log(square(2))

//return can be empty - returns undefined

//yield
//like return statement
//A generator function that yields a range of integer
function* range(from, to){
    for (let i=from; i<=to; i++){
        yield i;
    }
}
a=range(1,5);
console.log(a.next().value);

//throw
//Throw exception 
//Catch exception
function factorial(x){
    //if x is not a number, throw an exception
    if (x<0) throw new Error("x must be non-negative");
    let f;
    for (f=1; x>1; f*=x, x--);//empty statement
    return f;
}
console.log(factorial(4))
//When exception is thrown JS immediately stops normal execution and jumps to nearest exception handler
//If no handler is found, the exception is thrown to the caller
//The exception handler is a try/catch/finally statement

//try catch finally
try{
    //code
    //if exception is thrown, the rest of the try block is skipped
    //and the catch block is executed
} catch (e){
    //code
    //if no exception is thrown, the catch block is skipped
    //if an exception is thrown, the catch block is executed
    //if an exception is thrown, the rest of the try block is skipped
    //e to refer to the exception object
    //exception object has a name property that is the name of the exception
}finally{
    //code
    //if an exception is thrown, the finally block is executed
    //if no exception is thrown, the finally block is executed
    //finally block is always executed
    //terminates with end of block or return statement
    //or break, continue, throw, return
    //with uncaught exception
}

try{
    let n=Number(prompt('Please enter a number'));   
    let f = factorial(n);
    alert(n + '! = ' + f);
}
catch (ex){
    alert(ex);
}

//finally is always executed - even with return statement from try block
//no catch block can also be done
//simulate for loop with while loop
//for (let i=0; i<10; i++) console.log(i);
// let i=0; //initialize
// while (i<10){ //condition/test
//     try{
//     console.log(i);
//     }finally{
//         i++; //increment
//     }
// }

//bare exceptions
//try{
//    //code
//} catch{//something went wrong and we don't know what
//    //return undefined
//} finally{
//    //code

//with statement
//with (object) statement
//creates a temporary scope with the properties of the object as variable and executes statement within that scope
//forbidden in strict mode
//with statement is not recommended - runs significantly slower than normal code
//with statement is not recommended - makes code difficult to read and maintain
//document.forms[0].address.value
// with (document.forms[0]){
//     name.value="";
//     address.value="";
//     email.value="";
//}//hence repated typing can be avoided
//same as 
// let f=document.forms[0];
// f.name.value="";
// f.address.value="";
// f.email.value="";
//let creates a ordinary variable and not a property of the object

//debugger statement
//debugger; is used to run the function in debug mode
//debugger statement is ignored if the debugger is not running
// function f(o){
//     if (o===undefined) debugger;//temprary line for debugging
//     //code
// }

//use strict
//use strict directive
//with statement is forbidden
//eval and arguments cannot be used as variable names
//duplicate property names are forbidden
//octal numbers are forbidden
//delete cannot be used on variables, functions, or arguments
//delete cannot be used on nonconfigurable properties
//delete cannot be used on variables, functions, or arguments
//delete cannot be used on nonconfigurable properties
//eval and arguments cannot be used as variable names

//declarations
//declarations are not statements

//function declaration are used to define function
function area(r){return Math.PI*r*r;}
//creates a function object and assigns it to the specified name
//generator statement - function*
//async function statement - async function

//class
//class declaration
class Circle{
    constructor(r){
        this.r=r;
    }
    area(){
        return Math.PI*this.r*this.r;
    }
    circumference(){
        return 2*Math.PI*this.r;
    }
}
//class is not hoisted and cannot use class declaration before it is defined

//import and export
//module code available in another file
//import Circle from './circle.js';
//import {PI, TAU} from './math.js';
//import {PI as pi, TAU as tau} from './math.js';

//values within a module are private by default and cannot be imported unless they are exported
//export directive does this 
//const PI = Math.PI;
//const TAU = 2*Math.PI;
//export {PI, TAU};

//export default - when module exports only one value
//export const TAU = 2*Math.PI;
//export function magnitude(x,y){return Math.sqrt(x*x+y*y);}
//export default class Circle{//definition of class Circle}
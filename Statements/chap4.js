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

let matrix=[[1,2,3],[4,5,6],[7,8,9]];
sum=0;
success=false;

computeSum : if (matrix) {
    for (let i=0; i<matrix.length; i++){
        let row = matrix[i];
        if (!row) break computeSum;
        for (let j=0; j<row.length; j++){
            let cell = row[j];
            if (!cell) break computeSum;
            sum+=cell;
        }
    }
    success=true;
}

console.log(success, sum);

//continue

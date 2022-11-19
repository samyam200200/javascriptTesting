//activate strict mode
"use strict";

console.log("Hello World!");

let x; //declare a variable x 
x=0; //assign a value to x

x=1; //reassign a value to x
x=0.01; //reassign a value to x
x="hello"; //reassign a value to x
x=true; //reassign a value to boolean
x=false; //reassign a value to boolean
x=null; // Null means no value
x=undefined; // Undefined means no value

let book = {
    title: "The Hobbit",
    edition: 1,
};

console.log(book.title); // The Hobbit 
book["edition"] ; // reassign a value to book.edition
book.author="J.R.R. Tolkien"; // add a new property to book
book.contents = {}; // add a new property to book
//Conditional access with ?.
console.log(book.contents?.chapter1?.title); // undefined - book has no chapter1 property
//Changing the value of a property
book["contents"]["chapter1"] = "An Unexpected Party";
console.log(book.contents?.chapter1); // An Unexpected Party
console.log(book.contents.title);// Still undefined - book.contents is an object, not a string
let primes=[2,3,5,7];//declare an array
primes[0]; //2  
primes.length; //4
primes[primes.length-1]; //7
primes[4]=9; //add a new element by setting it
primes[4]=11; //or alter an existing element by setting it - indexing begins at 0
console.log(primes)
let empty=[]; //[] is an empty array with no elements
empty.length; //0

let points=[//array with 2 element
    {x:0,y:0},
    {x:1,y:1}
]

let data={ //an object with 2 properties
    trial1:[[1,2],[3,4]],
    trial2:[[2,3],[4,5]]
}
console.log(data)
//<button id="btn"> Click me </button> - This creates a great animation in java script
//<script>
let btn = document.getElementById("btn");
//create an animation
btn.onclick = function() {
    let elem = document.getElementById("animate");
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}
//</script>
console.log(3+2)
console.log(3-2)
console.log(3*2)
console.log(3/2)
console.log(points[1].x=points[1].x+1);

let count=0;
count++;
count--;
count+=2;
count-=2;
count*=2;
count/=2;
console.log(count)

x=2;
let y=3;
console.log(x===y); //false
console.log(x!==y); //true
console.log(x<y); //true
console.log(x<=y); //true
console.log(x>y); //false
console.log(x>=y); //false

"two"==="three";
"two">"three";
false === (x > y);
!(x === y);

//statement - a complete line of code - does not alter state of program - variable declaration, assignment, function call

function plus1(x){
    return x+1;
}

console.log(plus1(3));

let square = function(x){
    return x*x;
};

console.log(square(plus1(4)));

plus1=x => x+1;//input x maps to output x+1 - calles as arrow function
square = x => x*x; 

console.log(plus1(y))
console.log(square(plus1(y)))

//methods
let a=[];//empty array
a.push(1,2,3);//add elements to array
console.log(a);
a.reverse();//reverse the order of elements in array
console.log(a);

//ouwn methods can be defines
points = [
    {x:0,y:0},
    {x:1,y:1}
];

points.dist = function() {//distances between points
    let p1 = this[0]; //this is the object the method is called on - first element of array
    //this[0] is the same as points[0] - 
    //this is a keyword that refers to the object the method is called on
    let p2 = this[1];//second element of array
    let a = p2.x-p1.x;//x distance between points
    let b = p2.y-p1.y;//y distance between points
    return Math.sqrt(a*a+b*b);//distance between points
}

console.log(points.dist());

function abs(x){
    if(x>=0) {
        return x;
    } else {
    return -x;
    }
}
console.log(abs(-10)===abs(10));

function sum(array){
    let total=0;
    for(let x of array){
        total+=x;
    }
    return total;
}

console.log(sum(primes))

function factorial(n){
    let product=1;
    while(n>1){
        product*=n;
        n--;
    }
    return product;
}
console.log(factorial(4)); //24

//recursive function
function factorial1(n){
    if(n===1){
        return 1;
    } else {
        return n*factorial1(n-1);
    }
}
console.log(factorial1(4)); //24

function factorial2(n){
    let i, product=1;
    for (i=2;i<=n;i++){
        product*=i;
    }
    return product;
}
console.log(factorial2(4)); //24

class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    dist(){
        return Math.sqrt(this.x*this.x+this.y*this.y);//calculating distance from origin x^2+y^2
    }
}

let p = new Point(1,1);
console.log(p.dist());
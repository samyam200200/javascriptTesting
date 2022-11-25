//Objects 
//Object is a composite value aggregtes multiple values
//Object is unordered collection of properties
//Properties are name value pairs
//Data structure is hash, hashtable, dictionary, map, associative array
//It also inherits from another object known as its Object.prototype
//prototypal inheritance is a key feature of JavaScript
//Object are mutable and manipulated by reference
//Everything other than string, number, boolean, null, undefined, and symbol are objects. These are called as primitive values
//Common things to do with objects are set, query, delete, and enumerate properties
//In addition to its name and value, each property has a set of attributes: writable, enumerable, and configurable
//Writable - specifies whether the property can be changed
//Enumerable - specifies whether the property can be enumerated - in a for/in loop
//Configurable - specifies whether the property can be deleted and whether its attributes can be changed

//Creation of objects
//Object literal
//Object.create() function

//Object literal
//Object literal is a comma separated list of name value pairs enclosed in curly braces
//The name is a string and the value can be any expression
//The name can be any valid JavaScript identifier or a string literal
//The value can be any valid JavaScript expression
//The name and value are separated by a colon
let empty={}
let point={x:0,y:0} //two properties
let point2={x:point.x,y:point.y+1} //two properties
let book={
    "main title":"JavaScript", //property names include spaces, hyphens, and so on
    "sub-title":"The Definitive Guide", //property names include spaces, hyphens, and so on
    for:"all audiences", //for is reserved but can be used as a property name
    author: { //this is an object property and it itself has two properties
        firstname:"David",
        surname:"Flanagan"
    }
}
//trailing comma is recommended

//Creating obejct with new keyword
//The new keyword creates a new object and invokes the constructor function
//new is followed by a function call
let o=new Object() //creates an empty object
let a=new Array() //creates an empty array
let d=new Date() //creates a date object representing the current time
let r=new RegExp("js") //creates a regular expression to match the pattern js
let m=new Map() //creates a new map

//Prototypes
//Every JS object has a prototype object associated with it
//The first object inherits from Object.prototype
//Object created using the new keyword and a constructor function inherits from the prototype property of the constructor function
//Object created using object literal inherits from Object.prototype
//Object() inherits from Object.prototype so both {} and new Object() inherit from Object.prototype
//new Array() inherits from Array.prototype
//new Date() inherits from Date.prototype
//new RegExp() inherits from RegExp.prototype
//new Map() inherits from Map.prototype

//Almost all objects have a prototype object
//Object.prototype does not have a prototype (exception)
//Date.prototype inherits from Object.prototype 
//Date created using new Date() inherits from Date.prototype and Object.prototype
//called as prototype chain

//Object.create() creates a new object
let o1 = Object.create({x:1,y:2}); //o inherits properties x and y - uses the first argument as its prototype
o1.x+o1.y //3

//this o1 can use o1.toString() but it will not use Object.prototype.toString()
console.log(o1.toString()) //inherited

//when a null is passed as the first argument, the new object will not inherit any properties
let o2 = Object.create(null); //o inherits no properties

//ordinary empty object have to inherit from Object.prototype
let o3 = Object.create(Object.prototype); //o inherits properties from Object.prototype o3 is like {} or new Object()

//Object.create() takes a second argument that describes the properties to be added to the new object

//Inheritance guards against unintended modification of object by a library function
o={x:"Don't change this value"};
library.function (Object.create(0)); //Guard against modification of o

//Query and setting properties
//Use . or [] to access properties
let author=book.author //get the "author" property of the book object
let name=author.surname //get the "surname" property of that object
let title=book["main title"] //get the "main title" property of the book object

//Creating or modifying properties
//Use . or [] to access properties
book.edition=7 //create an "edition" property of book and give it the value 7
book["main title"]="ECMAScript" //modify the "main title" property of book
//square brackets must evaluate to a string

//Objects as associative arrays

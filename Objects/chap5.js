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
//library.function (Object.create(0)); //Guard against modification of o

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
//Using the . notation is convenient when the property name is a valid JS identifier
//Using the [] notation is convenient when the property name is not a valid JS identifier and can also be used when the property needs to be called dynamically because it is a string
let addr="";
let customer={
    address0:"123 Main St",
    address1:"123 Main St",
    address2:"Suite 100",
    address3:"Anytown, USA",
    address4:"123 Main St",
};
for (let i=0; i<4; i++){
    addr+=customer[`address${i}`]+"\n";
}
console.log(addr)

//Adding new stock to inventory - as we do not know stock name ahead of time
function addstock(protfolio, stockname, shares){
    protfolio[stockname]=shares;
}

function computeValue(protfolio){
    let total=0.0;
    for (let stock in protfolio){
        let shares=protfolio[stock];
        let price=getPrice(stock);
        total+=shares*price;
    }
    return total;
}
//Map class is better suited for this purpose

//Inheritance
//Prototype-based inheritance is a key feature of JavaScript
//Inheritance is the ability to define a new object type based on an existing object type
//The new object type inherits the properties of the existing object type
//if the property is not found in the new object type, the search continues in the existing object type
//The existing object type is called the prototype of the new object type
//The prototype chain is the sequence of prototypes of an object
//this creates a prototype chain 
o={};
o.x=1; //o has a property x with value 1
p=Object.create(o); //p inherits properties from o
console.log(p) //p has no properties of its own
p.y=2; //p has a property y with value 2
console.log(p)
let q=Object.create(p); //q inherits properties from p and o
q.z=3; //q has a property z with value 3
console.log(q) //{z: 3}z
// : 
// 3
// [[Prototype]]
// : 
// Object
// y
// : 
// 2
// [[Prototype]]
// : 
// Object
// x
// : 
// 1
// [[Prototype]]
// : 
// Object
let s=q.toString(); //toString is inherited from Object.prototype
console.log(s) //[object Object]
console.log(q.x+q.y) //3

//Prototype objects are not affected by changes to the object that inherits from them
let unitCircle={r:1};
let c=Object.create(unitCircle); //c inherits properties from unitCircle
c.x=1; c.y=1; //c defines its own properties x and y
c.r=2; //c overrides the inherited property r
console.log(unitCircle.r) //1 - unitCircle is not affected by changes to c

//There is one exception to this rule
//If the prototype object has a setter for a property, the setter will be called when the property is set on the object that inherits from the prototype

//Property access errors
console.log(book.subtitle)//undefined
//let len=book.subtitle.length //TypeError: Cannot read property 'length' of undefined as subtitle is undefined
let surname=undefined;
//checking against undefined or null is a common pattern
if (book){
    if (book.author){
        if (book.author.surname){
            surname=book.author.surname;
        }
    }
}
console.log(surname) //flangan
surname = book && book.author && book.author.surname; //&& is a logical operator that returns the value of its second operand if the first operand can be converted to true and otherwise returns the first operand
surname = book?.author?.surname; //?. is a new operator that returns the value of its right operand if its left operand is defined and otherwise returns undefined
console.log(surname) //flangan

//read only properties - cannot be changed or redefined

//Deleting properties
//Delete operator deletes a property from an object
//Returns true if the property was successfully deleted and false otherwise
//If the property does not exist, delete returns true
console.log(delete book.title); //delete the title property of book
console.log(delete book["main title"]);//doesn't have "main title" - ECMAScript - so it returns undefined
//delete does not dlete inherited properties
//have to be deleted from the prototype object
o={x:1};
console.log(delete o.x); //delete the x property of o
console.log(o.x) //undefined
console.log(delete o.x); //delete the x property of o again //returns true and does nothing
console.log(delete o.toString); //delete the toString property of o //returns true and does nothing //toString is inherited from Object.prototype
console.log(delete 1); //true - delete does nothing to non-object values

//Delete evaluates to false if the property is not configurable
//Configurable properties can be deleted and their attributes can be changed
//Non-configurable properties cannot be deleted and their attributes cannot be changed
//By default, all properties of an object are configurable
console.log(delete Object.prototype); //false - cannot delete Object.prototype
var x=1; //a global variable
console.log(delete globalThis.x); //false - delete the global variable x
function f(){} //a global function
console.log(delete globalThis.f); //false - makes them global and non-configurable

globalThis.x=1; //a global variable
console.log(delete x); //true - delete the global variable x

//Testing properties
//hasOwnProperty() method returns true if the object has the specified property as its own property
//propertyIsEnumerable() method returns true if the object has the specified property and if that property is enumerable
//in operator returns true if the specified property is in the prototype chain of the object
o={x:1};
console.log("x" in o); //true - o inherits property x from Object.prototype
console.log("y" in o); //false - o doesn't have a property y
console.log("toString" in o); //true - o inherits the toString method
console.log(o.hasOwnProperty("x")); //true - o has an own property x
console.log(o.hasOwnProperty("y")); //false - o doesn't have a property y
console.log(o.hasOwnProperty("toString")); //false - toString is not an own property but is inherited
console.log(Object.prototype.hasOwnProperty("toString")); //true - Object.prototype has an own property toString
console.log(o.propertyIsEnumerable("x")); //true - o has an own enumerable property x
console.log(Object.prototype.propertyIsEnumerable("toString")); //false - toString is not enumerable

//Or check if the property is undefined
console.log(o.x!==undefined); //true - o has an own property x
console.log(o.y!==undefined); //false - o doesn't have a property y
console.log(o.toString!==undefined); //true - o inherits the toString method

//in cannot be used to test for inherited properties
//in can distinguish between properties that do not exist and properties that exist but have the value undefined
o={x:undefined};
console.log(o.x!==undefined); //false 
console.log(o.y!==undefined); //false
console.log("x" in o); //true
console.log("y" in o); //false
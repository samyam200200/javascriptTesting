console.log('Hello from chap2.js');

//Animation button changes color of CSS
function changeColor() {
    // element for css is "animation"
    var animation = document.getElementById("animation");
    var color = animation.style.backgroundColor;
    if (color == "red") {
        animation.style.backgroundColor = "blue";
    } else {
        animation.style.backgroundColor = "red";
    }
}

//Call the function with animate button
document.getElementById("animate").onclick = changeColor;

//Floating point syntax in javascript
//[digits][.digits][(E|e)[(+|-)]digits]
3.14159
2345.6789
.33333
6.02e23
1.4738223E-32

let billion = 1_000_000_000;//underscore as a thousands separator
let bytes = 0x89_AB_CD_EF;//bytes separator
let bits = 0b1010_0001_1000_0101;//binary separator or nibbles
let fraction = 0.123_456_789;//fraction separator

//Arithmatic operations
let x=1;
let y=2;
let z=3-(x+y);
Math.pow(2,53) // 2 to the power 53
Math.round(.6) // 1 round to the nearest integer
Math.ceil(.6) // 1 round up to an integer
Math.floor(.6) // 0 round down to an integer
Math.abs(-5) // 5 absolute value
Math.max(x,y,z) // return the largest argument
Math.min(x,y,z) // return the smallest argument
Math.random() // random number between 0 and 1
Math.PI // π
Math.E // e
Math.sqrt(3) // the square root of 3
Math.pow(3, 1/3) // the cube root of 3
Math.sin(0) // also Math.cos, Math.tan, Math.asin, Math.acos, Math.atan
Math.log(10) // natural logarithm of 10
Math.log(100)/Math.LN10 // base 10 logarithm of 100
Math.log(512)/Math.LN2 // base 2 logarithm of 512
Math.exp(3) // Math.E cubed

//More functions
console.log(Math.cbrt(27)); // 3 cube root
console.log(Math.hypot(3, 4)); // 5 hypotenuse
console.log(Math.log10(100)); // 2 base 10 logarithm
console.log(Math.log2(1024)); // 10 base 2 logarithm
console.log(Math.log1p(x)); // 0.6931471805599453 natural logarithm of 1 + x; accurate for very small x
Infinity // Numver representing infinity
-Infinity // Number representing negative infinity
NaN // Not a Number
Number.POSITIVE_INFINITY // Infinity
Number.NEGATIVE_INFINITY // -Infinity
Number.NaN // NaN
Number.MAX_VALUE // 1.7976931348623157e+308
1/0 // Infinity
-1/0 // -Infinity
-Number.MAX_VALUE // -1.7976931348623157e+308 
Number.MIN_VALUE // 5e-324
0/0 // NaN
Infinity/Infinity // NaN
Number.MIN_VALUE/2 // 0 Underflow
Number.MAX_VALUE*2 // Infinity Overflow
-1/Infinity // 0 -> -0 negative zero
console.log(0===-0); // true
console.log(Object.is(0, -0)); // false

//More functions
Number.parseInt("3 blind mice") // 3
Number.parseFloat(" 3.14 meters") // 3.14
Number.isInteger(3) // true
Number.isInteger(3.0) // true
Number.isInteger(3.1) // false
Number.isNaN(NaN) // true
Number.isNaN(0/0) // true
Number.isNaN("blue") // false
Number.isFinite(Infinity) // false
Number.isFinite(NaN) // false
Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true is the number between -2^53 and 2^53
Number.MIN_SAFE_INTEGER
Number.EPSILON // 2.220446049250313e-16 - the difference between 1 and the smallest value greater than 1 that is representable as a Number

//Cant write
x=NaN
x === NaN // false
NaN === NaN // false
isNaN(x) // true

let zero = 0;
let negz = -0;
zero === negz // true
1/zero === 1/negz // False Infinity is not equal to -Infinity

x = .3 - .2;
y = .2 - .1;
console.log(x === y) // false
console.log(x === .1) // false
console.log(y === .1) // true

//bigInt
x=1234n; // bigInt
y=5678n; // bigInt
0b101n // binary bigInt
0o777n // octal bigInt
0x0000000000000000n // hex bigInt

1000n+2000n // 3000n
3000n-2000n // 1000n
2000n*3000n // 6000000n
3000n/997n // 3n - quotient is 3 - not an float
3000n%997n // 9n - remainder is 9
//(2n ** 131071n) - 1n // A mersenne prime

1<2n // true
2n<2 // false
0 == 0n // true
0 === 0n // false

//Bitwise operator works

//Dates and Times
let timestamp = Date.now(); // milliseconds since 1970 - number
let now = new Date(); // current date and time
let ms = now.getTime(); // milliseconds since 1970 - number
let iso = now.toISOString(); // ISO format date string
console.log(timestamp);
console.log(now);
console.log(ms);
console.log(iso);

//String literals
"" // empty string
"single quotes are ok too";
"3.14";
`"She said 'hi'"`; // backticks allow embedded expressions

'two\nlines'; // two lines

//three lines but single
'one\
long\
line';

//return can be used in string to separate lines
//escape characters are used to represent special characters - \n, \t, \b, \r, \f, \v, \', \", \\, \xnn, \unnnn, \u{nnnnnn}
//unicode characters can be represented using \u{nnnnnn} where n is a hexadecimal digit

'You\'re right, I didn\'t think of that'; // You're right, I didn't think of that
// \0 // null character
// \x41 // A
// \u03a3 // Σ
// \u{1f600} // 😀

//concatenate strings
const jhonny="John";
let msg = "hello, " + "world"; // "hello, world"
let greeting = "Welcome to my blog, " + jhonny;

//length of string
let s = "hello";
s.length // 5

//furthur string operations
s="hello, world";
s.substring(1,4) // ell
s.slice(1,4) // ell - same as substring
s.slice(-3) // rld - negative index counts from the end
s.split(", ") // ["hello", "world"] - split string into array of substrings
s.indexOf("l") // 2 - index of first occurrence of substring
s.indexOf('l', 3) // 3 - index of first occurrence of substring starting at index 3
s.indexOf('zz') // -1 - substring not found
s.lastIndexOf("l") // 10 - index of last occurrence of substring

//Boolean searching
s.startsWith("hello") // true
s.endsWith("!") // false
s.includes("or") // true

//String modification
s.replace("h", "H") // "Hello, world" - replace first occurrence
s.toLowerCase() // "hello, world"
s.toUpperCase() // "HELLO, WORLD"
s.normalize() // "hello, world" - normalize string to Unicode Normalization Form C
s.normalize("NFD") // "hello, world" - normalize string to Unicode Normalization Form D
s.normalize("NFC") // "hello, world" - normalize string to Unicode Normalization Form C

//Individual characters of string
s.charAt(0) // "h"
s.charAt(s.length-1) // "d"
s.charCodeAt(0) // 104 - Unicode code point of character at index 0
s.codePointAt(0) // 104 - Unicode code point of character at index 0

//String padding
"abc".padStart(10) // "       abc" - pad string with spaces to length 10 - 10 including string
"abc".padStart(10, "foo") // "foofoofabc" - pad string with "foo" to length 10 - 10 including string
"abc".padStart(6,"123465") // "123abc" - pad string with "123465" to length 6 - 6 including string
"abc".padEnd(10) // "abc       " - pad string with spaces to length 10 - 10 including string
"abc".padEnd(10, "foo") // "abcfoofoof" - pad string with "foo" to length 10 - 10 including string
"abc".padEnd(6,"123465") // "abc123" - pad string with "123465" to length 6 - 6 including string

//Space trimming
"   test  ".trim() // "test" - remove leading and trailing whitespace
"   test  ".trimStart() // "test  " - remove leading whitespace
"   test  ".trimEnd() // "   test" - remove trailing whitespace

//Other string method
s.repeat(3) // "hello, worldhello, worldhello, world" - repeat string 3 times
s.concat("!", "!", "!") // "hello, world!!!"
s.concat("!", "!", "!").repeat(3) // "hello, world!!!hello, world!!!hello, world!!!"
"<>".repeat(5) // "<><><><><>"

//Strings like arrays
s="hello, world";
s[0] // "h"
s[s.length-1] // "d"

//Template literals
s=`hello, world`;

let name="Bill";
msg = `Hello, ${name}`; // "Hello, Bill"
console.log(msg);

test={
    description: "This is \na test"
}
let errorMessage = `\u2718 Test failed: ${test.description} \u2718`;
console.log(errorMessage);

//Tagged template literals
console.log('\n'.length) // 1
console.log(String.raw`\n`.length) // 2 - does not process escape characters

//Pattern matching
// /^HTML/ // matches any string that starts with HTML
// /CSS$/ // matches any string that ends with CSS
// /HTML|CSS/ // matches any string that contains HTML or CSS
// /HTML+/ // matches any string that contains one or more H's followed by T's followed by M's followed by L's
// /HTML*/ // matches any string that contains zero or more H's followed by T's followed by M's followed by L's
// /HTML?/ // matches any string that contains zero or one H's followed by T's followed by M's followed by L's
// /HTML{3}/ // matches any string that contains exactly three H's followed by T's followed by M's followed by L's
// /HTML{3,}/ // matches any string that contains three or more H's followed by T's followed by M's followed by L's
// /HTML{3,5}/ // matches any string that contains between three and five H's followed by T's followed by M's followed by L's
// [1-9][0-9]* // matches any string that contains a number greater than zero
// [0-9]+ // matches any string that contains a number greater than or equal to zero
// \bjavascript\b/i // matches any string that contains the word javascript surrounded by word boundaries - case-insensitive
// /javascript/i // matches any string that contains the word javascript - case-insensitive

let text="testing: 1, 2, 3";
let pattern=/\d+/g; // matches one or more digits - global search
console.log(pattern.test(text)); // true
text.search(pattern); // 9 - index of first match
text.match(pattern); // ["1", "2", "3"] - array of matches
text.replace(pattern, "#"); // "testing: #, #, #" - replace matches with #
text.split(/\D+/); // ["", "1", "2", "3"] - split string on non-digits

//Boolean values
let a=4;
a===4; // true
let b=3;
if (a===4) {
    b=b+1;
} else {
    a=a+1;
}

//following are false - undefined, null, 0, -0, NaN, "", false
//Everything else is true
//Not equals !==

//And - &&, Or - ||, Not - !
//typeof - null returns object
//null == undefined // true
//null === undefined // false
//Undefined - System level, unexpected, or error like absence of value and null - programmer level, intentional, or error like absence of value

//Symbols 
// JS Object type is unordered collection of properties where each property is a key-value pair
let strname='string name';
let symname = Symbol('propname');
console.log(typeof strname); // string
console.log(typeof symname); // symbol
let o ={};
o[strname] = 1;
o[symname] = 2; //property with symbol name
console.log(o[strname]); // 1
console.log(o[symname]); // 2
console.log(symname);

//Symbol takes a string argument and can be returned as a string
let symname1 = Symbol('propname');
console.log(symname1.toString()); // "Symbol(propname)"
console.log(Symbol('propname')===Symbol('propname')); // false - symbols are unique

//symbol.for() - returns a symbol from the global symbol registry - returns same value for same string argument
let symname2 = Symbol.for('propname');
let symname3 = Symbol.for('propname');
console.log(symname2===symname3); // true

//Global object
//Global object is the default object of the global scope - globally defined identifiers 
//Interpreter starts with global object and then creates a global scope
//Defined properties include:
//undefined, infinity, NaN
//Global functions - eval(), isFinite(), isNaN(), parseFloat(), parseInt(), decodeURI(), decodeURIComponent(), encodeURI(), encodeURIComponent(), escape(), unescape()
//Constructor functions - Object(), Function(), Boolean(), Symbol(), Error(), EvalError(), InternalError(), RangeError(), ReferenceError(), SyntaxError(), TypeError(), URIError(), Number(), Math(), Date(), String(), RegExp(), Array(), Int8Array(), Uint8Array(), Uint8ClampedArray(), Int16Array(), Uint16Array(), Int32Array(), Uint32Array(), Float32Array(), Float64Array(), Map(), Set(), WeakMap(), WeakSet(), ArrayBuffer(), SharedArrayBuffer(), Atomics(), DataView(), JSON(), Promise(), Generator(),
//Global objects - globalThis, Infinity, NaN, undefined, eval, isFinite, isNaN, parseFloat, parseInt, decodeURI, decodeURIComponent, encodeURI, encodeURIComponent, escape, unescape, Object, Function, Boolean, Symbol, Error, EvalError, InternalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError, Number, Math, Date, String, RegExp, Array, Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Map, Set, WeakMap, WeakSet, ArrayBuffer, SharedArrayBuffer, Atomics, DataView, JSON, Promise, Generator, GeneratorFunction, AsyncFunction, Reflect, Proxy, Intl, WebAssembly

//Immutable primitive values - string, number, boolean, undefined, null, symbol
//Mutable reference objects values - object, function, arrays
s="hello";
s.toUpperCase(); // "HELLO"
console.log(s); // "hello" - string is immutable

//for primitive values are compared by value
//Strings are treated as equal if they have the same sequence of characters and the same length

//objects are different that primitive values - they are mutable
o={x:1};
o.x=2; // o is now {x:2}
o.y=3; // o is now {x:2, y:3}

a=[1,2,3];
a[0]=0; // a is now [0,2,3]
a[3]=4; // a is now [0,2,3,4] //adding a new array element

//Objects are not compared by value - objects are not equal even if they have the same properties
//Two distinct arrays are not equal even if they have the same elements
o={x:1};
p={x:1};
console.log(o===p); // false
a = [];
b=[];
console.log(a===b); // false

//Objets are called reference types because they are references to a value - compared by reference
a=[];
b=a;
b[0]=1;
console.log(a); // [1]
console.log(a===b); // true

a=['a', 'b', 'c'];
b=[];
for (let i=0; i<a.length; i++) {
    b[i]=a[i]; //copying array elements
}
let c=Array.from(b); //copies array ES6
//New copy of array is created

console.log(b===c); // false
console.log(b===a); // false

function equalArrays(a, b) {
    if (a === b) return true; //identical arrays
    if (a.length !== b.length) return false; //different lengths
    for (let i=0; i<a.length; i++) {
        if (a[i] !== b[i]) return false; //different elements
    }
    return true;
}

//TYpe conversion
//Type conversion is the process of converting a value from one type to another
console.log(10+" objects")   // "10 objects" - string
console.log("7"*"4") // 28 - number
console.log("7"*4) // 28 - number
console.log("7"+4) // "74" - string
n=1- "x"; // NaN - not a number
console.log(isNaN(n)); // true
n + " objects"; // "NaN objects"

//conversions and equality
//== does not check type
//=== checks type
null == undefined // true
null === undefined // false
"0" == 0 // true
0==false // true
0===false // false
console.log(0=="") // true
undefined == false // false - despite undefined is falsey

//Explicit type conversion
//Number() - converts to number
//String() - converts to string
//Boolean() - converts to boolean
//Object() - converts to object
//Array() - converts to array
//Date() - converts to date
//RegExp() - converts to regular expression
//Symbol() - converts to symbol

Number("3") // 3
String(false) // "false"
Boolean(0) // false
Boolean([])// true
//Any other value except null and undefined has toString() method

!!"hello" // true - !! converts to boolean
!!0 // false

n=17;
let binary='0b'+n.toString(2); //binary representation = "0b10001"
let octal='0o'+n.toString(8); //octal representation = "0o21"
let hex='0x'+n.toString(16); //hexadecimal representation = "0x11"

//toFixed() - returns a string representation of a number with a specified number of digits after the decimal point
//toExponential() - returns a string representation of a number in exponential notation
//toPrecision() - returns a string representation of a number with a specified length 
n=123456.789;
n.toFixed(0); // "123457"
n.toFixed(2); // "123456.79"
n.toFixed(5); // "123456.78900"
n.toExponential(1); // "1.2e+5"
n.toExponential(3); // "1.235e+5"
n.toPrecision(4); // "1.235e+5"
n.toPrecision(7); // "123456.8"
n.toPrecision(10); // "123456.7890"

//Number() - converts to number
Number("123 abcd"); // NaN
//parseInt() - parses a string and returns an integer
parseInt("123 abcd"); // 123
parseFloat(" 3.14 meters"); // 3.14
parseInt("-12.34"); // -12
parseInt("0xFF"); // 255
parseInt("0xff"); // 255
parseInt("-0xFF"); // -255
parseFloat(".1"); // 0.1
parseInt("0.1"); // 0
parseInt(".1"); // NaN
parseFloat("$72.47"); // NaN

//parseInt() accepts a second argument - radix - base of the number between 2 and 36
parseInt("11", 2); // 3 (1*2 + 1*1)
parseInt("ff", 16); // 255 (15*16 + 15*1)
parseInt("zz", 36); // 1295 (35*36 + 35*1)
parseInt("077", 8); // 63 (7*8 + 7*1)
parseInt("077", 10); // 77  (7*10 + 7*1)

//Object to Primitive Conversions
//Object to primitive conversions are performed when an object is used in a context where a primitive value is expected
//prefer-string - returns primite value, prefering a string value
//prefer-number - returns primite value, prefering a number value
//no-preference - returns primite value, prefering a default value - all objects prefer number except Date objects which prefer string

//Object to boolean - All objects are converted to true in boolean context
//Object to string - All objects are converted to string by calling their toString() method - Same rules as type conversion
//Case operator conversion
//+ operator performs numeric addition and string concatenation
//toString() and valueOf() methods are used to convert objects to primitive values
console.log(({x:1}).toString()); // "[object Object]"
console.log([1,2,3].toString()); // "1,2,3"
(function(x) {f(x);}).toString(); // "function(x) {f(x);}"
let d=new Date(2020, 0, 1);
console.log(d.toString()); // "Wed Jan 01 2020 00:00:00 GMT+0545 (Nepal Time)"

//toValue - converts to primiive value that represents the object
d=new Date(2010, 0, 1);
console.log(d.valueOf()); // 1262283300000

//Object to primite conversion algorithm
//prefer-string - tries toString() method if the method is defined 
//js then tries valueOf() method if the method is defined - then conversion fails and TypeError is thrown
//prefer-number - tries valueOf() method first then toString() method
//no-preference - date - JS uses prfer-string algorithm, for anyother object JS uses prefer-number algorithm

Number([])  // 0 - tries valueOf() method first then toString() method - valueOf does not result in primitive value so toString is called - which returns empty string "" and Number("") returns 0
Number([1,2,3]) // NaN - valueOf() method returns array and Number(array) returns NaN - then toString() method is called - which returns "1,2,3" and Number("1,2,3") returns NaN
Number({}) // NaN - valueOf() method returns object and Number(object) returns NaN - then toString() method is called - which returns "[object Object]" and Number("[object Object]") returns NaN
Number(new Date(2020, 0, 1)) // 1577836800000 - valueOf() method returns number and Number(number) 
Number(new Date(2020, 0, 1).toString()) // NaN - valueOf() method returns string and Number(string) returns NaN
Number([99]) // 99 - valueOf() method returns array and Number(array) returns NaN - then toString() method is called - which returns "99" and Number("99") returns 99

//Variable declaration and Assignment
//let and const
let i;
let sum; //also on same line let i, sum;
//assigning initial value
let message = "hello";
let e=0.57721, pi=3.14159;

const H0=74; //hubble constant
const C=299792458; //speed of light
const AU=1.496E8; //astronomical unit in km

//When to use const - when you know the value will not change or declare eveything with const and then change to let if needed
for (let i=0; i<10; i++) {
    let x = i*2;
    console.log(x);
}

data=[1,2,3];
for (const datum of data) {
    console.log(datum);
} //Can even use const

//Variable and constant scope
//let and const are block scoped
//blocks include if, for, while, switch, try, catch, function, class
//scope of global variables is the entire program 
//html script tag - global scope is the entire page

//repeated declarations - let and const - error
x=1;
if (x===1){
    let x=2;
    console.log(x) //2
}
console.log(x)
//var declarations - global scope
var data=[];
//Variables declared within var do not have block scope - scoped to the body of the containing function
//Var declarations are hoisted to the top of the function body

var x1=1;
if (x1===1){
    var x1=2;
    console.log(x1) //2
}
console.log(x1) //2
//var can be used to declare multiple times for the same variable
//hoisting - var declarations are hoisted to the top of the function body
//if initialization is present, the variable is initialized to the value of the initializer
//if no initialization is present, the variable is initialized to undefined

//Destructoring assignment
//Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, as sometimes that’s more convenient
//Array destructuring
let [j, k, l] = [1, 2, 3]; // j=1, k=2, l=3
[j, k] = [j+1, k+1]; // j=2, k=3
[j, k]=[k, j]; // j=3, k=2

//toPolar() function - returns an array of two elements - radius and angle
function toPolar(x, y) {
    return [Math.sqrt(x*x+y*y), Math.atan2(y, x)];
}

//toCartesian() function - returns an array of two elements - x and y
function toCartesian(r, theta) {
    return [r*Math.cos(theta), r*Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0);
console.log(r, theta); // 1.4142135623730951 0.7853981633974483

let [x2, y2] = toCartesian(r, theta);
console.log(x2, y2); // 1 1

let obj={x:1, y:2};
for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`);
}

let [x4, y4]=[1];//x4=1, y4=undefined
[x, y]=[1, 2, 3];//x=1, y=2
[, x, , y]=[1, 2, 3, 4];//x=2, y=4

//... for rest elements
[x, ...y]=[1, 2, 3];//x=1, y=[2, 3]

//nested array
let [x5, [y5, z5]] = [1, [2, 3], 4]; //x5=1, y5=2, z5=3

//Any iterable object like strings, maps, sets, generators, etc can be destructured
let [first, ...rest]="Hello"; //first="H", rest=["e", "l", "l", "o"]

let transparent = {r1: 0.0, g: 0.0, b1: 0.0, a: 0.0};
let {r1, g, b1} = transparent; //r1=0.0, g=0.0, b1=0.0 - Name of the variable must match the name of the property
console.log(r1, g, b1); // 0 0 0

const {sin, cos, tan}=Math; //sin, cos, tan are functions
//same as const sin=Math.sin, cos=Math.cos, tan=Math.tan;
console.log(sin(0.5), cos(0.5), tan(0.5)); // 0.479425538604203 0.8775825618903728 0.5463024898437905

//Same as const cosine = Math.cos, tangent = Math.tan;
const {cos:cosine, tan:tangent}=Math;
console.log(cosine(0.5), tangent(0.5)); // 0.8775825618903728 0.5463024898437905

//complex destructuring
let data2 = [{x6:1, y6:2}, {x6:3, y6:4}];
let [{x6: x7, y6: y7}, {x6: x8, y6: y8}] = data2;
console.log(x7, y7, x8, y8); // 1 2 3 4

let data3={p1:[1, 2], p2:[3, 4]};
let {p1:[x9, y9], p2:[x10, y10]}=data3;
console.log(x9, y9, x10, y10); // 1 2 3 4

//flip assignment
let points1=[{x:1, y:2}, {x:3, y:4}];
let [{x:x11, y:y11}, {x:x12, y:y12}]=points1;

let points2=[{x:x11, y:y11}, {x:x12, y:y12}];
console.log(points2); // [{x: 1, y: 2}, {x: 3, y: 4}]

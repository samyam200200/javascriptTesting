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

/*let text = "We are the so-called \"Vikings\" from the north.";
 text = "The character \v is called backslash.";
 text =
`The quick
brown fox
jumps over
the lazy dog`;
console.log(text)
*/

let fname = "Rahul"
let lname = "Chaudhari"
console.log(`Welcome ${fname} ${lname} in the city !`)

let name = "Rahul Chaudhari"
console.log(name.charAt(1))//ChartAt method is used for as per providing the index will get the element value upon index

console.log(name.charCodeAt(0)) //ChartCodeAt method is used for upon indexing get the Aski value of that element

let text = "HELLO WORLD";
let code = text.codePointAt(1);
console.log(code)

//slice() extracts a part of a string and returns the extracted part in a new string.
//The method takes 2 parameters: start position, and end position (end not included).

let fruit = "Apple,Banana,Kiwi"
//console.log(fruit.slice(1,4)) //ppl
//console.log(fruit.slice(4)) //e,Banana,Kiwi- If you omit the second parameter, the method will slice out the rest of the string:
//console.log(fruit.slice(-6)) //a,Kiwi -If a parameter is negative, the position is counted from the end of the string:

//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
console.log(fruit.substring(2,6)) // Op - ple,

// fruit = "Apple,Banana,Kiwi";
// console.log(fruit.slice(0,4))
// console.log(fruit.toUpperCase())
// console.log(fruit.toLowerCase())

fruit = "Apple,Banana,Kiwi";
let q1 = fruit.slice(0,5).toUpperCase()
console.log(q1) //Op - APPLE

//The trim() method removes whitespace from both sides of a string:
let name2 = "      RAHUL     "
console.log(name2.trim()) // Trim is used to remove the both side of spacing
console.log(name2.trimEnd()) // trimEnd is used to remove  the end side of spacing
console.log(name2.trimStart()) // trimStart is used to remove  the start side of spacing

//The padStart() method pads a string from the start.
//It pads a string with another string (multiple times) until it reaches a given length.

let ab = "5"
let cd = ab.padStart(6,"-");
console.log(cd) // Op - -----5

//The padStart() method pads a string from the start.
//It pads a string with another string (multiple times) until it reaches a given length.

let textt = "Rahul";
let padded = textt.padStart(9,"0"); 
console.log(padded) // Op - 0000Rahul

//The padEnd() method pads a string from the end.
//It pads a string with another string (multiple times) until it reaches a given length.

let pad1 = textt.padEnd(10,"*") // 
console.log(pad1) //Op - Rahul*****

//The repeat() method returns a string with a number of copies of a string.
//The repeat() method returns a new string.
//The repeat() method does not change the original string.

let Fname = "Parnika Rahul Chaudhari"
let D1 = Fname.repeat(4);
console.log(D1) //Op - Parnika Rahul ChaudhariParnika Rahul ChaudhariParnika Rahul ChaudhariParnika Rahul Chaudhari

// The replace() method replaces a specified value with another value in a string:
// By default, the replace() method replaces only the first match:
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

let txt = " Welcome to the Cybage !"
let change = txt.replace(" Welcome to the Cybage !","welcome to the home ...!")
console.log(change) //Op - welcome to the home ...!

let sentence = "Hi JavaScript"
let update = sentence.replace("JavaScript","Typescript")
console.log(update) //Op - Hi Typescript


let textA = "Please visit Microsoft and Microsoft!";
let newText = textA.replace("Microsoft", "W3Schools"); 
console.log(newText) //Op - Please visit W3Schools and Microsoft!

let text3 = "Please visit Microsoft!";
let newText3 = text3.replace("MICROSOFT", "W3Schools");
console.log(newText3) // Op - not change becs case sensitive

//To replace case insensitive, use a regular expression with an /i flag (insensitive):

let text4 = "Please visit Microsoft!";
let newText4 = text4.replace(/MICROSOFT/i , "Google")
console.log(newText4) //Op- Please visit Google!

//To replace all matches, use a regular expression with a /g flag (global match):
let text5 = "Please visit Microsoft and Microsoft!";
let newText5 = text5.replace(/Microsoft/g, "W3Schools");
console.log(newText5) //Op - Please visit W3Schools and W3Schools!  

//The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
let tex = "I love cats. Cats are very easy to love. Cats are very popular";
let abc = tex.replaceAll(/Cats/g, "Dog").replaceAll(/cats/g, "dog")
console.log(abc) //Op - I love dog. Dog are very easy to love. Dog are very popular

//A string can be converted to an array with the split() method:
//If the parameter is (""), the returned array will be an array of single characters:
let str = "Parnika"
let arr = str.split("");
console.log(arr) //Op -  ['P', 'a', 'r','n', 'i', 'k','a']

//If the parameter is (" "), the returned array will be an array of words:
let str1 = "Hi I am Parnika"
let arr1 = str1.split(" ")
console.log(arr1) //Op - [ 'Hi', 'I', 'am', 'Parnika' ]

//If the separator is omitted, the returned array will contain the whole string in index [0].
let str2 = "Hi I am a Parnika"
let arr2 = str2.split()
console.log(arr2) //Op - [ 'Hi I am a Parnika' ]

//------------------------------------------------------------------------------------------------------
// String Search functions
//indexOf()
//The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
//Both indexOf(), and lastIndexOf() return -1 if the text is not found:
//        012345678910
let ll = "Please locate where 'locate' occurs!"
let index = ll.indexOf("locate")
console.log(index)

//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let index2 = ll.lastIndexOf("locate")
console.log(index2) 
//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning:
//if the second parameter is 15, the search starts at position 15, and searches to the beginning of the string.
let inn = ll.lastIndexOf("locate", 15) // 
console.log(inn)

//The two methods, indexOf() and search(), are equal?
//They accept the same arguments (parameters), and return the same value?
//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let index3 = ll.search("where")
console.log(index3)


//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let textB = "The rain in SPAIN stays mainly in the plain";
let bb=textB.match("ain");
console.log(bb)

let textD = "Hello world, welcome to word  the universe.";

let cc = textD.includes("word",15)
console.log(cc) //Op - true 2nd word is check and its after index value 15

//The startsWith() method returns true if a string begins with a specified value.

console.log(textD.startsWith("Hello")) // Op - true
console.log(textD.startsWith("world",27)) //op starts from after index postion 27.

//The endsWith() method returns true if a string ends with a specified value.
let www = "John Doe";
console.log(www.endsWith("Doe")); //true

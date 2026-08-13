//slice()

let city=["pune","mumbai","nagpur","nashik","banglore","jaipur","kolkota"]
//         -7    -6         -5         -4       -3         -2       -1                                                        
let c1 = city.slice(1,4) // slice used to filter a piece of data and given end index is not print.
console.log(c1) //Op - [ 'mumbai', 'nagpur', 'nashik' ]
let c2 = city.slice(2) // kr suppose single index dila tr tya index pasun last paryant element print krto
console.log(c2) //[ 'nagpur', 'nashik', 'banglore', 'jaipur', 'kolkota' ]

let c3 = city.slice(-6, -3)
console.log(c3) // [ 'mumbai', 'nagpur', 'nashik' ]


// splice ()
// syntax => splice(startIndex, deleteCount, item1, item2, ...)
// action => removes elements from the array starting at startIndex and optionally inserts new elements
// return => array of deleted elements (original array gets updated)

//               0        1      2        3       4        5
let animals = ["tiger","lion","wolf",'camel',"rabbit","snake"]
// let a1 = animals.splice(1,2)
// console.log(a1) //Op - [ 'lion', 'wolf' ]
// console.log(animals) //- [ 'tiger', 'camel', 'rabbit', 'snake' ]

// let a2 = animals.splice(3,5)
// console.log(a2) //op - [ 'camel', 'rabbit', 'snake' ]
// console.log(animals) //op - [ 'tiger', 'lion', 'wolf' ]

let a3 = animals.splice(1,3,"AA","BB","CC") //element remove and replace with new one
console.log(animals) // [ 'tiger', 'AA', 'BB', 'CC', 'rabbit', 'snake' ]

// fill()
// syntax => fill(value, startIndex?, endIndex?)  // endIndex not included
// action => fills array elements with the given value from startIndex to before endIndex
// return => updates the existing array

//           0  1  2  3  4  5
let num2 = [11,22,33,44,55,66]

num2.fill('abc',2,5)
console.log(num2) //Op : [ 11, 22, 'abc', 'abc', 'abc', 66 ]

num2.fill("**", 3,4)
console.log(num2)

//sort()

city=["pune","mumbai","nagpur","nashik","banglore","jaipur","kolkota","amravati","amdabad"]
console.log(city.sort())
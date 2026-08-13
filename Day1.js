//Array 
let names = ["Rahul","Vicky","Parnika", "Archana"]
//loop
for(let i = 0; i<names.length; i++){
    console.log(names[i])
}
//while loop
let x=0;
while(x<names.length){
    console.log(names[x])
    x++;
}
console.log(typeof(names)) // Object , in JS every is a object.
//push
let num = [11,22,33]
let q1 = num.push(44) // add the element in the last
console.log(num) //[ 11, 22, 33, 44 ]
console.log(q1) // 4 - total count of element return a no.
//pop()
let q2 = num.pop() //removing the element from last
console.log(q2) //Op is 44
//shift
let q3 = num.shift() // removing the element from first
console.log(q3)
//unshift   //adding the element at  first
let q4 = num.unshift("aa")
console.log(num) //op [ 'aa', 22, 33 ]

//reverse
num.reverse() //used for reverse the array element 
console.log(num) // Op : [ 33, 22, 'aa' ]

//concat
let x1 = [1,2,3];
let y1 = [4,5,6];
let xy1 = x1.concat(y1) // concat used for combine the array third array concat karaycha asel tr concat karun karu shaktat
console.log(xy1)

//join  : converts array in to string

let animal = ["Tiger", "Cat", "Lion", "Dog"]
let a1 = animal.join(" * ") //used for join 2 string using the any astric or symbol
console.log(a1) //Op- Tiger * Cat * Lion * Dog

//flat()
   //       0    1      2
   //      0 1   0  1  0 1
let xx = [[1,2],[3,4],[5,6]] //two dimentional array
console.log(xx[0][1])   // op - 2
console.log(xx[1][0])   //Op - 3

let a2 = xx.flat() //flat method used for seperate the element in array format.
console.log(a2) //op - [ 1, 2, 3, 4, 5, 6 ]

//index of 

let fruits = ["Mango","Apple","Grapes"]
console.log(fruits.indexOf("Apple"))  //Op - 1

console.log(fruits.at(0))  //op - Mango






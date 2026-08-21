//destructuring  (unpacking values from arrays or objects into variables)
// Destructuring is a JavaScript feature that allows you to extract values from 
// arrays or objects and store them into variables in a clean and readable way.
// Instead of accessing values one by one, destructuring lets you do it in a single line.

let fname = ["Rahul", "Sanjay","Chaudhari"]
// let a = fname[0]
// let b = fname[1]
// let c = fname[2]
// console.log(a)
// console.log(b)
// console.log(c)
//due to this line of code we use the Destructure method 

let [a,b,c]=fname //this is array destructuring
console.log(a)
console.log(b)
console.log(c)

//same Destructuring using in Object

let car = {
    name : "Baleno",
    model : "XUV",
    price : 20
}

let {name,model,price}=car
console.log(name)
console.log(model)
console.log(price)

let {name : nm, model:ml, price:pr}=car //we can assign too variable
console.log(nm)
console.log(ml)
console.log(pr)

let family = {
    pname : "Sanjay",
    sname : "Chaudhari",
    mob : 9595,
    child : {
            cname : "Rahul",
            age : 30
    }
}
let {pname,sname,mob,child}=family
console.log(child)
console.log(pname)
console.log(sname)

let {pname:pn, sname:sn, mob:m,child:{cname:cn,age:ag}} = family
console.log(ag)
console.log(cn)
console.log(pn)
//-------------------------------------------------------------------------------------
//rest and spread operator
//rest, spread operator
//spread operator (VERY IMPORTANT)
//“Spread operator is used to spread the elements of an array or object into individual elements.”

let A = [10,20,30]
let B = [45,55,66]
let C = [...A,...B] //Syntax [...A, ...B]
console.log(C) //Op - [ 10, 20, 30, 45, 55, 66 ]

let info1 = {
    empname : "Vicky",
    empID : 23
}

let info2 = {
    city : "Pune",
    contact : 1234
}
let details = {...info1,...info2}
console.log(details)

// Rest Operator (VERY IMPORTANT)
// “Rest operator is used to collect the remaining elements into an array.” 

let num = [1234,300,400,500]
let[x1,...x2]=num
console.log(x1) //op - 1234
console.log(x2) //op - [ 300, 400, 500 ]

let num2 = ["xyz","ABC","Parnika","Prisha","Archana"]
let[y1,y2,...y3]=num2
console.log(y1) //op - XYZ
console.log(y2) //Op - ABC
console.log(y3) //op - [ 'Parnika', 'Prisha', 'Archana' ]

let student = {
    studN : "Rahul",
    subject : "English",
    class : 10,
    address : "Pune"
}
let {studN,subject,...remain} = student
console.log(studN) // Rahul
console.log(subject) // English
console.log(remain) // { class: 10, address: 'Pune' }



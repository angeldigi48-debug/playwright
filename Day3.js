//map, filter , reduce, forEach
//some , every, find , findIndex

//map
// map(function(el, index, arr)
// action => performs an operation on each element of the array
// return => new array with modified values

let byear = [2021,2000,2002]
let age = []
for (let i=0; i<byear.length; i++){
     age.push(2026 - byear[i])
}
console.log(age)

//Using Map
let age2 = byear.map(function(el,index,arr){
    return 2026 - el;
})
console.log("Age = ", age2)

// //filter
// filter(function(el, index, arr)
// action => filters elements based on a condition (true/false)
// return => new array with matching elements

let marks = [96,88,79,22,33,25,69]
let pass = [];
for (let x=0; x<marks.length; x++){
    if (marks[x]>35){
        pass.push(marks[x])
    }
}
console.log(pass) // op- [ 96, 88, 79, 69 ]

//Using Filter ()

let passstud = marks.filter(function(el,index,arr){
    return el > 35 ;
})
console.log(passstud) //Op [ 96, 88, 79, 69 ]

//reduce
// reduce(function(acc, el, index, arr), initialValue)
// acc => accumulator (acts as a temporary variable)
// action => reduces all elements to a single value
// return => single value (number / string / object)

let numm = [10,20,30];
let total = 5
for(let y=0; y<numm.length; y++){
    total = total + numm[y]
}
console.log(total)

//using reduce
let total_A = numm.reduce(function(accumalator,el,index,arr){
        return  accumalator + el;
},5)
console.log(total_A)

// //-------------------------------------------------
// //forEach
// forEach(function(el, index, arr))
// action => performs an operation on each element of the array
// return => undefined (does NOT create new array)

let names2 = ["Rahul","Parnika"]
for(let b=0; b<names2.length; b++){
    console.log(`I am ${names2[b]}, How are you`) //String interpolation
}               

let fname = names2.forEach(function(el,index, arr){
    console.log(`Hi ${el}, How are you ?`)
})
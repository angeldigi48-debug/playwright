// some()
// some(function(el, index, arr)
// action => checks if at least one element satisfies the condition
// return => true if any element matches, otherwise false

let arr = [30,38,42,46,60,75,84,99]
let a1 = arr.some(function(el,index,arr){ //ek jari element as per condition satisfy jala tr true return krnar
    return el > 40 ;
})
console.log(a1)

//every()
// every(function(el, index, arr)
// action => checks if all elements satisfy the condition
// return => true if all elements match, otherwise false
let arr1=[30,49,67,89,99,45,34,67,111]
let a2 = arr1.every(function(el){ 
    return el > 40 
})
console.log(a2)  //false becs all values are not greater than 40.

let arr2 = [55,64,77]
let a3 = arr2.every(function(el){
    return el > 50;
})
console.log(a3) //Op is true becs all arr element is greater than 50

// find()
// find(function(el, index, arr)
// action => finds the first element that satisfies the condition
// return => element (if not found, returns undefined)

arr=[30,49,67,89,99,45,34,67,111]
let a4 = arr.find(function(el,index,arr){
    return el > 50;
})
console.log(a4) //op is 67 ,  find used for find the first element as per condition.

// findIndex()
// findIndex(function(el, index, arr)
// action => finds the index of the first element that satisfies the condition
// return => index (if not found, returns -1)

let a5 = arr.findIndex(function(el){
    return el > 35
})
console.log(a5) //Op 1 findindex is used for returing the index value of array element based on condition.

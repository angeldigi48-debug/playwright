let emp = [{
    fname : "Rahul",
    lname : "Chaudhari",
    ID    : 1,
    BG    : "O+ve",
    Marks : 66

},
{
    fname : "Parnika",
    lname : "Patil",
    ID    : 2,
    BG    : "AB+ve",
    Marks : 98

},
{
    fname : "Sanket",
    lname : "Teli",
    ID    : 3,
    BG    : "A+ve",
    Marks : 33
}
]
console.log(emp[0])
console.log(emp[1].lname)
console.log(emp[2].BG)

//get addition of marks of each students
let passstud = emp.reduce(function(acc,el){
    return acc+el.Marks

},0)
console.log(passstud)

let result = emp.filter(function(el){
    return el.Marks > 60
})
console.log(result)

let fail = emp.filter(function(el){
    return el.Marks < 50
})
console.log(fail)

emp.filter(function(el){
    return el.Marks < 35 

}).forEach(function(el){
     el.Marks = el.Marks+10
})
console.log(emp)

//Print all Fname in array
for(i=0;i<=emp.length-1;i++){
console.log(emp[i].fname) 
}

let info = {
    fname : "Rahul",
    lname : "Chaudhari",
    city  : "Jalgaon",
    Mob   : 959594,
    Marks : [33,66,88]

}
//Dot notation 
console.log(info.fname) //op is Rahul
console.log(info.Marks[1]) //Op is - 66
console.log(info.Mob) //Op - 959594
info.midname = "Sanjay" // add new key value pair
console.log(info)

info.fname = "Vicky" //Update the value 
console.log(info.fname)

//Bracket notation
console.log(info["fname"]) //op - Rahul
console.log(info["city"])

info["Langauge"] = "marathi"
console.log(info)

console.log(Object.keys(info)) //
console.log(Object.values(info))
console.log(Object.entries(info))

let aa = info.hasOwnProperty("city")
console.log(aa) //true
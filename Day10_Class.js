//oops concepts
// A class is a blueprint
// Objects are created from this blueprint
// Method is written once, reused everywhere
// “Methods in classes do NOT use the function keyword.”

// new → creates a new object
// Each object gets its own copy of data
// Methods are shared
// Why Output is undefined : “Class defines structure, not values.”

//class
class students {
    fn = undefined
    ln = undefined
    displayData(){
        console.log(this.fn+" "+this.ln)
    }

}
let Result = new students()
Result.fn = "Parnika"
Result.ln = "Chaudhari"
Result.displayData()
//console.log(Result)

class car {
    carName = "KIA"
    Fuel = "Petrol"
    displayModel (){
        console.log(this.carName+" "+this.Fuel)
    }
}
let kk = new car()
kk.displayModel()

class car1 {
    carname = undefined
    model = undefined
    displayCar () {
        console.log("Car Details = " +this.carname+ " "+this.model)
    }
}
let CC = new car1 ()
CC.carname = "Maruti_Suzuki"
CC.model = "Wagoner"
CC.displayCar()
//-----------------------------------------------------------------------------------------------------
// PART 4: Constructor (Professional Way)
// “What if we want values at the time of object creation?”

// constructor() runs automatically
// Called when new keyword is used
// Used to initialize values
//“Constructor = automatic setup function.”

// Object Literal (short note)
// An object literal is a simple way to create an object using key–value pairs.
// Functions inside an object are called methods.
// `this` refers to the current object.

// PART 1: Object Literal (Problem Introduction)
// “Before classes, JavaScript developers used object literals to group data and behavior.”
//Constructor

class StudentsInfo {
    constructor (ffn,lln,rn){
        this.studname = ffn
        this.lastname = lln
        this.rollno = rn
    }
    displayDetails (){
        console.log(this.studname+" "+this.lastname+" "+this.rollno)
    }
}
console.log("---------------------------------------")
console.log("-----Student Details-----")
let res1 = new StudentsInfo("Parnika","Chaudhari",11)
let res2 = new StudentsInfo("Archana","Patil",23)
let res3 = new StudentsInfo("Rahul","Teli",55)
res1.displayDetails()
res2.displayDetails()
res3.displayDetails()

//-------------------------------------------------------------------------

class CarModels {
    constructor (cn,my,ft){
        this.carname = cn
        this.modelyear = my
        this.fuel = ft
    }
    displayCars (){
        console.log("Carname " +this.carname+" "+this.modelyear+" "+this.fuel)
    }
}
console.log("------CarDetails------")
let DD = new CarModels("Wagoner",2019,"CNG")
let DD1 = new CarModels("Carens",2022, "Petrol")
let DD2 = new CarModels("Baleno", 2015, "Diesel")

DD.displayCars()
DD1.displayCars()
DD2.displayCars()
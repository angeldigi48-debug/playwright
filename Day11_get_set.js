class emp {
    constructor(fn,ln) {
    this.fname = fn
    this.lname = ln
    }
    displayempp (){
        console.log(this.fname+" "+this.lname)
    }
}

let aa = new emp("Rahul","Chaudhari")
aa.displayempp()

//---------------------------------------------------------
class company {
    setFirstN(fnn){
        this.ffname = fnn
    }
    setLastN(lnn){
        this.llname = lnn
    }

    getFirstN(){
        return this.ffname
    }

    getLastN(){
        return this.llname
    }
    
}
let res = new company()
res.setFirstN("Parnika")
res.setLastN("Chaudhari")

let dp = res.getFirstN()
console.log(dp)
let ln = res.getLastN()
console.log(ln)

console.log("*************************************************")

class car {
    setcarName(car_name){
        this.carmodel=car_name
    }
    setcarcolor(color){
        this.carcolor=color
    }
    getcarName(){
        return this.carmodel
    }
    getcarcolor(){
        return this.carcolor
    }
}

let model1 = new car()
model1.setcarName("Kia_carens")
model1.setcarcolor("Gravity Gray")

let cc = model1.getcarName()
console.log(cc)
let cd = model1.getcarcolor()
console.log(cd)

console.log("***********************************")

class stud {
    set students_name(sn){
        this.studname = sn
    }
    set students_roll(rl){
        this.studroll=rl
    }
    get name (){
        return this.studname
    }
    get roll (){
        return this.studroll
    }
}

let AA = new stud()
AA.students_name= "Shubham"
AA.students_roll= 11

console.log(AA.name)
console.log(AA.roll)
console.log("*******************************************")

class Bank {
    set deposite (dp){
        this.cash = dp
    }
    get dep (){
        return this.cash
    }

    set withdraw (wd){
        this.withd = wd
    }
    get with () {
        return this.withd 
    }

}

let AB = new Bank ()
AB.deposite = 10000
AB.withdraw = 5000

console.log(AB.dep)
console.log(AB.with)

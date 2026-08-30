//oops concepts 
// “Let’s create two different people in a system: Student and Teacher.”
// “Inheritance allows one class to reuse properties and methods of another class.”
// Parent class → Student
// Child class → Teacher

class student {
    constructor (fn,ln){
        this.firstn = fn
        this.lastn = ln
    }
    display_stud (){
        console.log(this.firstn+" "+this.lastn)
    }
}

class Teacher extends student {
    constructor (fn,ln,sl){
        super(fn,ln)
        this.salary = sl
    }
    display_sal(){
        console.log(this.firstn+ " "+this.lastn+" "+this.salary)
    }
}

let AB = new Teacher("Rahul","Chaudhari",5000)

AB.display_stud()
AB.display_sal()

console.log("*********************************************************")

class car {
    constructor(name,model){
        this.carname = name
        this.carmodel = model
    }
    displayCardetails(){
        console.log(this.carname+" "+this.carmodel)
    }
}

class vehicle extends car {
    constructor(name,model,color){
        super(name,model)
        this.vehiclecolor = color
    }
    displayvehicledetails(){
        console.log(this.carname+" "+this.carmodel+" "+this.vehiclecolor)
    }
}
let res = new vehicle ("Carens","VXI","GravityGray")
res.displayCardetails()
res.displayvehicledetails()

class Employee {
    constructor (names){
        this.names = names
    }
    displayenames(){
        console.log(`Employee name :- ${this.names}`)
    }
}

class Tester extends Employee{
    test(){
        console.log(`${this.names} is testing the application`)
    }
}

let CD = new Tester("Rahul")
CD.displayenames()
CD.test()

//Multilevel Inheritance
class Emp {
    constructor(nm){
        this.nm =nm
    }
    emp (){
        console.log(`${this.nm} is a employee`)
    }
}

class Testers extends Emp {
    tester(){
        console.log(`${this.nm} is perform a Manual testing`)
    }
}
class Automation extends Testers{
    automation () {
        console.log(`${this.nm} is automate test cases using playwright`)
    }
}
let cc = new Automation("Rahul")
cc.emp()
cc.tester()
cc.automation()

console.log("------------------------------------------------------------")

class Grandfather {
    constructor(gfn,ln){
        this.gfn = gfn
        this.ln = ln
    }
    grandfatherdata(){
        console.log(`Grandfather Name - ${this.gfn} ${this.ln}`)
    }
}
class father extends Grandfather{
    constructor (gfn,ln,fn){
        super(gfn,ln)
        this.fn = fn
    }
    father(){
        console.log(`Father name  - ${this.fn}  ${this.gfn}  ${this.ln}`)

    }
}

class Daughter extends father {
    constructor (gfn,ln,fn,dn){
        super(gfn,ln,fn)
        this.dn=dn
    }
    daughter(){
        console.log(`Daughter name - ${this.dn}  ${this.fn}  ${this.gfn}  ${this.ln}`)
    }
}

let GH = new Daughter("Sanjay","Chaudhari","Rahul","Parnika")
GH.grandfatherdata()
GH.father()
GH.daughter()

//Hierachical inheritance 

class Testeremp {
    constructor(fname){
        this.fname = fname;
    }
    tester1(){
        console.log(`which testing job you have did - ${this.fname}`)
    }
}

class Manual extends Testeremp {
    constructor(fname,mltool){
        super(fname)
        this.mltool = mltool
    }
    manualdisp(){
        console.log(`I am a ${this.fname} and I am working as a ${this.mltool} tester`)
    }
}
class Automationn extends Testeremp{
    constructor(fname,atool){
        super(fname)
        this.atool = atool
    }
    auto(){
        console.log(`I am a ${this.fname}  and I am working as a automation ${this.atool} tool`)
    }
}

let res1 = new Manual("Rahul","Manual")
res1.manualdisp()
let res2 = new Automationn("Rahul","Playwright")
res2.auto()
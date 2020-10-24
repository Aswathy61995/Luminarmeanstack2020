class Employee{
    constructor(eid,name,desig,join,resign){
        this.eid=eid;
        this.name=name;
        this.desig=desig;
        this.join=join;
        this.resign=resign;
    }
    getEmp=()=>{
        console.log(this.eid)
        console.log(this.name)
        console.log(this.desig)
        console.log(this.join)
        console.log(this.resign)
    }
}
var obj1=new Employee(100,"ajay","devop",1981,2003);
var obj2=new Employee(101,"vijay","devop",1992,2008);
var obj3=new Employee(102,"bijoy","ba",1999,2007);
var obj4=new Employee(103,"jhon","ba",1989,2010);
var obj5=new Employee(104,"danie","qa",2009,2014);
var obj6=new Employee(105,"lari","qa",1987,2010);
var arr=[]
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
arr.push(obj4);
arr.push(obj5);
arr.push(obj6);
//print all employee name and design
console.log(" Q1.Employee name and Designation")
var details1=arr.map(obj=>obj.name + " " +obj.desig )
console.log(details1)
//print all employee details whose design equals devop
console.log("Q2.Employees based on designation as devop")
var details2=arr.filter(obj=>obj.desig=="devop")
console.log(details2)
//print all employee details who are working in 80s
console.log("Q3.Employees working in 80s")
var details3=arr.filter(obj=>obj.join>1980 & obj.join<1990)
 console.log(details3)
// print employee details who have experience >9 years
console.log("Q4.Employee with experience more than 9 years")
var details4=arr.filter(obj=>obj.resign-obj.join > 9 )
console.log(details4)
//sort all employess based on their joining year
console.log("Q5.sorted employees based on joining year")
var details5=arr.map(obj=>obj.join).sort((obj1,obj2)=>obj1-obj2)
console.log(details5)

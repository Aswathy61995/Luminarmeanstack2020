//create class for employee eid,ename,desig,sal
//print high sal
//print low sal 
//print employee in sorted order
class Employee{
    constructor(eid,ename,desig,sal)
    {
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.sal=sal;
    }
    getEmp=()=>{
        console.log(this.eid)
        console.log(this.ename)
        console.log(this.desig)
        console.log(this.sal)
     }

}
var obj=new Employee(123,"remya","developer",25000)
var obj1=new Employee(345,"rema","tester",15000)
var obj2=new Employee(567,"amaya","developer",23000)
var obj3=new Employee(123,"arya","accountant",28000)
var ar=[];
ar.push(obj);
ar.push(obj1);
ar.push(obj2);
ar.push(obj3)

var maxsal=ar.map(obj=>obj.sal).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log("the maximum salary is "+maxsal)
var minsal=ar.map(obj=>obj.sal).reduce((obj1,obj2)=>obj1>obj2?obj2:obj1)
console.log("the minimum salary is "+minsal)
console.log("sorted order of employee sal is")
var srtemp=ar.map(obj=>obj.sal).sort((obj1,obj2)=>obj1-obj2)
console.log(srtemp)
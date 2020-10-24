class Employee{
    constructor(eid,ename,desig,sal){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.sal=sal;

    }
    getEmp=()=>{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.sal);


    }
}
var obj= new Employee(1001,"ajay","developer",25000)
//obj.getEmp()
var obj1= new Employee(1002,"jay","developer",25000)
//obj1.getEmp()
var obj2= new Employee(1003,"vijay","tester",15000)
//obj2.getEmp()
var emp=[];
emp.push(obj);
emp.push(obj1);
emp.push(obj2);
//print all employees who have sal>22000
for(e of emp){
    if(e.sal>22000){
        console.log(e.ename)
    }
}
//print all employee whose designation is developer
for(e of emp){
    if(e.desig=="developer"){
        console.log(e.ename +e.desig)
    }
}


class Employee{

   constructor(eid,ename){
        this.eid=eid;
        this.ename=ename;
    }
    getEmployee(){
        console.log("eid"+this.eid);
        console.log("ename"+this.ename);
    }
}
var emp=new Employee(100,"ajay");
//emp.setEmployee();
emp.getEmployee();
// duty of setemploye is initialising instance variable
//constructor
//classname
//duty of constructor is to imitialize instance variables
// constructor name always constructor
//construcotr invoke at the time of object creation

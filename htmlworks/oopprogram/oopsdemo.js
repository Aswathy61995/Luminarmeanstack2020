//class is a design pattern
//object real world entity
//reference
class Person{
setPerson(age,name){
    this.age=age;
    this.name=name;

}
getPerson(){
    console.log("name="+this.name);
    console.log("age="+this.age)

}



}
// create refernce and obj
var obj=new Person();//created refernce
obj.setPerson(12,"ajay");
obj.getPerson();
var obj1=new Person();
obj1.setPerson(22,"vijay");
obj1.getPerson();
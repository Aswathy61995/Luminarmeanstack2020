class Student{
setStudent(roll,name,course,total)
{
    this.roll=roll;
    this.name=name;
    this.course=course;
    this.total=total;
}
getStudent(){
    console.log("roll="+this.roll);
    console.log("name="+this.name);
    console.log("course="+this.course);
    console.log("total="+this.total);
}


}
var obj= new Student();
obj.setStudent(1,"abc","testing",78);
obj.getStudent();

class Student {

    static get collegeName() {
       var clgname="luminar";
        return clgname;

    }
    static printcollegeName() {
        var clgname="luminar";
         console.log(clgname) ;
 
     }
 
    setStudent(rol, name) {
        this.rol = rol;
        this.name = name;
    }
    getStudent() {
        console.log("rol=" + this.rol);
        console.log("name=" + this.name)
        Student.printcollegeName();// static method can be accessed ud=sing class name

    }
}
class Myclass extends Student{};
var obj= new Myclass();
obj.setStudent(100,"abc")
obj.getStudent();
console.log(Myclass.collegeName)

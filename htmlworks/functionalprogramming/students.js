//create student class rol name total course
// print all student name and id who have total>135
//print all student name who have course=bca
//find sum of student total who have course=bca
//getstudent arrow function
var sumtotal=0;
class Student{
    constructor(rol,name,total,course){
        this.rol=rol;
        this.name=name;
        this.total=total;
        this.course=course;
    }
    getStudent=()=>{
        console.log(this.rol);
        console.log(this.name);
        console.log(this.total);
        console.log(this.course);
    }



}
var obj= new Student(1,"anju",270,"bca");
var obj1= new Student(2,"renju",60,"mca");
var obj2= new Student(3,"aju",80,"bca")
var ar=[];
ar.push(obj);
ar.push(obj1);
ar.push(obj2);
//total >135
var stud=ar.filter(obj=>obj.total>135)
for(st of stud){
    console.log(st.name)
}
//console.log(stud)
// for(s of stud){
//     if(s.total>135){
//         console.log("students having total marks greater than 135 "+s.name,s.rol)
//     }
// }

// for (s of stud){
//     if(s.course=="bca"){
//         console.log("students who have choosen bca "+s.name)

//     }
// }
//print total of student whose course is bca
var cfilter=ar.filter(obj=>obj.course=="bca")
console.log(cfilter)
var total=cfilter.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
console.log(total)
// for(s of stud){
//     if(s.course=="bca"){
     
//         var sum=s.total;
        
//         sumtotal=sumtotal+sum;
        
//     }
// }console.log( "total marks of students is "+sumtotal)

//print student information of maximum total
var maxtotal=ar.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log("the maximum total is "+maxtotal)
//print student information of lowest total
var mintotal=ar.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj2:obj1)
console.log("the minimum total is "+mintotal)
//print top student
//var topstud=ar.filter(obj=>obj.total==maxtotal)maxtotal is calculated above so use that code for checking 
var topstud=ar.filter(obj=>obj.total==ar.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2))
for(stud of topstud){
   stud.getStudent();
    }
console.log("sorted order")
var srtstud=ar.map(obj=>obj.total).sort((obj1,obj2)=>obj1-obj2)
console.log(srtstud)
//data are stored in key value form
var student={rol:1001,name:"ajay",course:"mca"}
console.log(student);
//to fetch ajay value we have to use corresponding key
console.log(student["name"])
console.log(student.name)
// total 150
student["total"]=150;
console.log(student)
// search for key in this object
console.log("gender" in student);
console.log("name" in student)
//updating
student["total"]+=25;
console.log(student)

var employee ={id:100,ename:"ajay", designation:"developer"}
console.log(employee.ename)
console.log("salary" in employee)
employee["salary"]=25000
console.log(employee)
employee["salary"]+=10000
console.log(employee)
for(key in employee){
    console.log(key,employee[key])
}
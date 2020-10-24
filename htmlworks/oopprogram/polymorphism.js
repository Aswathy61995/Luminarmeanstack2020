//polymorphism  many forms
//method overloading--same method name different number of arguments but in javascript recently implemented method executed

//method overriding
class Maths{
    add(){
        console.log(10+20);
    }
   add(num1){
       console.log(20+num1);
   }
   add(num,num1){
       console.log(num+num1)
   }
}
var calc=new Maths();
calc.add(10,20);
//calc.add(); this wont work in javascript

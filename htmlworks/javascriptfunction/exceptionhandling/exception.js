//exception is an abnormal code
//exception handling
   //try-
   //catch
   //finally
   //throw
   //
var num1=10;
var num2=0;
try{
    if(num2==0) throw "division by zero"
var result=num1/num2
console.log("res="+result)
}
catch(err){
    console.log(err)
}
// try{
//     //doubtful code
// }
// catch(){
//     //handling code
// }
//finally{
    //cleanup code
//console.log("inside finally block")
//}
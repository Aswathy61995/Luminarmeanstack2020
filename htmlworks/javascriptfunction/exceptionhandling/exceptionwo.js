
try{
var data="10+2$5*8+4*8"
var res=eval(data)// exception occured
console.log(res)
}
catch(err){
    var data="10+2*5*8+4*8"
var res=eval(data)// exception occured
console.log(res)
}
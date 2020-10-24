var arr=[10,10,20,20,30,32,31]
//var numbers= arr.split("")
var obj={}
for(number of arr){
    if(number in obj){
        obj[number]+=1 ;
    }
    else{
        obj[number]=1;
    }
}
console.log(obj)
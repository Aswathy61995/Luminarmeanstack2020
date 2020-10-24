//find sum of this array
var arr=[10,11,12,13,14,15,16]
odd=[]
even=[]
var sum=0;
for(  number of arr){
    sum=sum+number;
}
console.log(sum);
//print all even numbers in the array
for(number of arr){
    if (number%2==0){
        console.log(number);
    }
    
}
//store even and odd numbers into two different array
for(number of arr){
    if (number%2==0){
         even.push(number);
        
    }
    else{
        odd.push(number);
        
    }
    
}console.log(odd);
console.log(even);

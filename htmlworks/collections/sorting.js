var arr=[10,2,4,12]
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp
        }
    }
}
console.log(arr)
//functional programming
var ar= arr.sort((i,j)=>i-j)// i comes before j for i is 10 and j is 11(lowest comes first ) 
console.log(ar)
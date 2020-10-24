//procedure binsrch(arr,low,upp,mid,element)
//input always a sorted array

//step2
//low<=0 upp<=8 (based on location)
//var low=0;
//var upp=(arr.length)-1;
//step 3 calculate mid
//mid=(low+upp)/2  0+8/2=4
//var mid=Math.floor((low+upp)/2);
//var element=6
//case1
// element greater than mid 6>ar[3] 6>4 true low= mid+1
//case2
//element less than mid  upp=mid-1
//case3
//element==ar[mid] element found
var arr = [1, 2, 3, 4, 5, 6, 7, 11]
var element = 6;
var low = 0;
var flag=0;
var upp = arr.length - 1;
while (low < upp) {
    mid = Math.floor((low + upp) / 2);
    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp= mid-1;
        

    }
    else if(element==arr[mid]){
        flag+=1;
       break;
    }

}
if(flag>0){
    console.log("element found")
}
else{
    console.log("element not  found")
}
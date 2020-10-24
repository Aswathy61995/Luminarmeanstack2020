var num=153; var check=0; var rem=0 ,sum=0;
check=num;
while(check!=0){
   // var digit=num%10;
    //var result=digit*digit*digit;
    //console.log(result)
    rem = check % 10;
    sum = sum + (rem * rem * rem);
    check = check / 10;
}console.log(num)
var num=123;var reverse=0;
while(num>0){
    var digit=num%10;
  
  reverse =reverse*10 +digit;
    num=Math.floor(num/10)
    
}console.log(reverse)
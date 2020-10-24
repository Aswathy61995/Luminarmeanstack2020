//find least positive missing number
var arr=[-3,-1,0,1,2,3,5]
var n
function findMissingNo(arr,n ) 
    { 
        var val; 
         var nextval; 
      for (var i = 0; i < n; i++) { 
      if (arr[i] <= 0 || arr[i] > n) 
     continue; 
      val = arr[i]; 
      while (arr[val - 1] != val) { 
                nextval = arr[val - 1]; 
                arr[val - 1] = val; 
                val = nextval; 
                if (val <= 0 || val > n) 
                    break; 
            } 
        } 
      for (var i = 0; i < n; i++) { 
            if (arr[i] != i + 1) { 
                return i + 1; 
            } 
        } 
      return n + 1; 
    } 
      var arr_size = arr.length; 
          
       var missing = findMissingNo(arr, arr_size); 
          
        console.log( "The smallest positive"
                + " missing number is " + missing); 
     

   
    




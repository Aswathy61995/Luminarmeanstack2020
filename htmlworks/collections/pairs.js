//find pairs to get the given sum
var num=[1,2,3,4]
var data=7

for(pair1 of num){
   
    for (pair2 of num){
        if( pair1+pair2==data){
            console.log("the pair of numbers that gives the given sum are"+" "+ +pair1,+pair2)
        }
        
    }
    
}




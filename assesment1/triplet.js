var num=[3,1,4,6,5]
for(pair1 of num){
   
    for (pair2 of num){
        for(pair3 of num){
        var value1=pair1*pair1
        var value2=pair2*pair2
        var value3=pair3*pair3
        if( value1+value2==value3){
            console.log("the pair of numbers that gives the given sum are"+" "+ +pair1,+pair2,+pair3)  
        }
    }
        
    }
    
}

        
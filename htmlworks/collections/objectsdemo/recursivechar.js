var pattern="ABABABAC"
var obj=[]
// find first recursive character
for(char of pattern){
    if(char in obj){
        console.log("first recursive character is"+char);
        break;
    }
    else{
        obj[char]=1;
    }
}
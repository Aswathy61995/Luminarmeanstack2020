class Add{
    constructor(){
        console.log("no arg")
    }
    constructor(arg1){
        console.log("single arg")
    }
}
var ob =Add(10);
//A class may only have one constructor
//so this wont work
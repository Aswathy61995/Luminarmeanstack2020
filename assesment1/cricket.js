class Cricket{
    constructor(name,tweet){
        this.name=name;
        this.tweet=tweet;
    }
    getCount=()=>{
       
        console.log(this.name);
        console.log(this.tweet);
        
    }



}
var obj= new Cricket("sachin","tweet1");
var obj1= new Cricket("sehwag","tweet1");
var obj2= new Cricket("kholi","tweet1");
var obj3= new Cricket("sachin","tweet2");
var obj4= new Cricket("kholi","tweet1");
var ar=[];
ar.push(obj,obj1,obj2,obj3,obj4);




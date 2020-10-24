//parent> child
//super>sub
//base>derived
class Parent{
    bike(arg){
        console.log("i have passion pro")
    }
}
class Child extends Parent{
    bike(arg){
        console.log("i have duke")
    }
}
var ch = new Child();
ch.bike("arg");
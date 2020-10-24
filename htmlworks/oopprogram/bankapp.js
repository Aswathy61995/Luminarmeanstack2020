class Bank{
    //static bankname="sbi";
    static get bankname(){
        var bankname="sbi";
        console.log(bankname);
    }
    constructor(name,accno,balance){
        this.name=name;
        this.accno=accno;
        this.balance=balance;
       // this.bankname=bankname;
    }
    deposit(amount){
        this.balance=amount;
        console.log("your"+this.bankname+"account created with"+amount+"avlbal="+this.balance)


    }
    withdraw(amount){
        if(amount>this.balance){
            console.log("insufficient balance")

        }
        else{
            this.balance-=amount;
            console.log("your"+this.bankname+"account created with"+amount+"avlbal="+this.balance)

        }
    }
    balanceenq(){
        console.log("your current account balance"+this.balance)

    }

}
var obj = new Bank("ajay",1001,2000,"sbi");
//obj.createaccount("ajay",1001,2000,"sbi")
console.log(obj.name);
obj.deposit(100000)
obj.withdraw(5000);
//var obj2 = new Bank();
//obj2.createaccount("jay",1002,2000,"sbi")
//obj2.balanceenq();
//different types of variables
//localvariables
//instancevariable   are always prepend with this key word we can access instance variable by using this keyword inside class
//outside class we can access by using refernce name
//different types of method
//instance methods
//static methods
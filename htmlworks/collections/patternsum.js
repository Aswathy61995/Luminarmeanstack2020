var ar=[5,3,4]
var total=0;
for(item of ar){
    total+=item
}
var  op=[]
for (item of ar){
    var elem=total-item;// 12-5 7
    op.push(elem)
}
console.log(op)
var data = "HHHPPSDAAA"
var obj = []
for (char of data) {
    obj.push(char)
} console.log("input " + data)

var obj1 = []
for (char1 of obj) {
    var count = 0;
    for (char2 of obj) {
        if (char1 == char2) {
            count += 1;
        }
    }


    obj1.push(count + char1);
    for (var i = 1; i < count; i++){
        obj.shift();
    }
}


console.log("output:" + obj1)

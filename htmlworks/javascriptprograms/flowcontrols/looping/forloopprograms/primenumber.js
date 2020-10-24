var num = 9;
for (var i = 2; i < num; i++) {
    var flag = 0;
    if (num % i == 0) {
        flag += 1;
        break;


    }
    else {
        flag = 0;

    }
    if (flag > 0) {
        console.log("not a prime number")
    }

    else {
        console.log("is prime number")
    }
}   
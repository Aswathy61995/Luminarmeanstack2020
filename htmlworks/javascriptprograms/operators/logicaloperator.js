//(&,|.^)
console.log(true&false)
// x   y    x&y    x|y   x^y
//  0   1    0      1    1
//  0   0    0      0    0
//  1   1    1      1    0
//  1   0    0      1    1

//if any bit is 0 then entire is 0
//if any bit is 1 then entire is 1
//if both end are same the it will return 0 if both end are different it will return 1
console.log(2&6)
//010
//100
//======
//000
console.log(2|6)
console.log(2^6)

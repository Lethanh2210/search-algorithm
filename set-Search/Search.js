function findItemMiss(arr) {
    var restNumber = [];
    var count = 0;
    for (var i = 1; i <= 10; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i === arr[j]) {
                count++;
            }
        }
        if (count === 0) {
            restNumber.push(i);
        }
        else {
            count = 0;
        }
    }
    return restNumber;
}
var arr = [1, 3, 5, 7, 9, 10];
console.log(findItemMiss(arr));

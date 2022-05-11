function CountNumber(arr, number) {
    var count = 0;
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        if (i === number) {
            count++;
        }
    }
    return count;
}
var arr = [1, 2, 3, 4, 5, 6, 2, 3];
console.log(CountNumber(arr, 2));

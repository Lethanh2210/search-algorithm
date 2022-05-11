function BinarySearch(numbers, target, left, right) {
    var mid = Math.floor((right + left) / 2);
    if (target === numbers[mid]) {
        return mid;
    }
    if (left <= right) {
        if (target < mid) {
            return BinarySearch(numbers, target, left, mid - 1);
        }
        else {
            return BinarySearch(numbers, target, mid + 1, right);
        }
    }
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(BinarySearch(arr, 7, 0, arr.length - 1));

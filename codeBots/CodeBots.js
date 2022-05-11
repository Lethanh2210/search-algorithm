function CodeBots(arr) {
    var lostSum = 0;
    var sum = 0;
    for (var i = 0; i < arr[0].length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j][i] === 0) {
                for (var k = j; k < arr.length; k++) {
                    lostSum += arr[k][i];
                }
                break;
            }
        }
    }
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }
    return sum - lostSum;
}
var matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
console.log(CodeBots(matrix));

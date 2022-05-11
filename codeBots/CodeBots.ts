function CodeBots(arr){
    let lostSum = 0;
    let sum = 0;
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(arr[j][i] === 0){
                for (let k = j; k < arr.length; k++) {
                    lostSum += arr[k][i];
                }
                break;
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }

    return sum - lostSum;
}


let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]

console.log(CodeBots(matrix));
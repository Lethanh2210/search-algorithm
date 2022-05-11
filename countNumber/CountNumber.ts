function CountNumber(arr,number){
    let count = 0;
    for(let i of arr){
        if(i === number){
            count++;
        }
    }
    return count;
}

let arr = [1,2,3,4,5,6,2,3];

console.log(CountNumber(arr,2));
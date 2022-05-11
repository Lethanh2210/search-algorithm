let viettel = [];
let mobi = [];
let vina = [];


function ClassificateNumber(str){
    let start = 0;
    let vietNum = '32';
    let mobiNum = '70';
    let vinaNum = '83';

    while(start < str.length){
        let subStr = str.substring(start,start+10);
        let FirstNum = subStr[1] + subStr[2];
        if(FirstNum === vietNum){
            viettel.push(subStr);
        }
        if(FirstNum === mobiNum){
            mobi.push(subStr);
        }
        if(FirstNum === vinaNum){
            vina.push(subStr);
        }
        start += 10;
    }
}

let str = '0709999999032123456008312345670321112220';
ClassificateNumber(str);

console.log(viettel);
console.log(vina);
console.log(mobi);
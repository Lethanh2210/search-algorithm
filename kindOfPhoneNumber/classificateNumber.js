var viettel = [];
var mobi = [];
var vina = [];
function ClassificateNumber(str) {
    var start = 0;
    var vietNum = '32';
    var mobiNum = '70';
    var vinaNum = '83';
    while (start < str.length) {
        var subStr = str.substring(start, start + 10);
        var FirstNum = subStr[1] + subStr[2];
        if (FirstNum === vietNum) {
            viettel.push(subStr);
        }
        if (FirstNum === mobiNum) {
            mobi.push(subStr);
        }
        if (FirstNum === vinaNum) {
            vina.push(subStr);
        }
        start += 10;
    }
}
var str = '0709999999032123456008312345670321112220';
ClassificateNumber(str);
console.log(viettel);
console.log(vina);
console.log(mobi);

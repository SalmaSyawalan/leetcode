/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function(s, x, y) {
    // var points = 0, a;
    // if(x < y){
    //     a = y;
    //     b = x;
    //     str1 = "ba";
    //     str2 = "ab";;
    // } else {
    //     a = x;
    //     b = y;
    //     str1 = "ab";
    //     str2 = "ba";
    // }
    // console.log(s.length);
    // while(s.includes("ba")){
    //     for(var i=0; i < s.length -1; i++){
    //         console.log(s[i]);
    //         if(s[i] === 'b' && s[i+1] === 'a'){
    //             points += y;
    //             s = [s.slice(0 , i), s.slice(i+2)].join('');
    //             console.log(s);
    //         }
    //     }
    // }
    
    // while(s.includes("ab")){
    //     for(var i=0; i < s.length -1; i++){
    //         console.log(i);
    //         if(s[i] === 'a' && s[i+1] === 'b'){
    //             console.log('yes');
    //             points += x;
    //             s = [s.slice(0 , i), s.slice(i+2)].join('');
    //             console.log(s);
    //         }
    //     }
    // }
    
    // console.log(s);
    // if(x < y){
    //     while(s.includes("ba")){
    //         a = s.match(/ba/g).length;
    //         // console.log(a);
    //         points += y*a;
    //         s = s.replace(/ba/g, "");
    //         console.log(s);
    //     }
    //     while(s.includes("ab")){
    //         a = s.match(/ab/g).length;
    //         points += x*a;
    //         s = s.replace(/ab/g, "");
    //         console.log(s);
    //     }
        
    // } else {
    //     while(s.includes("ab")){
    //         a = s.match(/ab/g).length;
    //         points += x*a;
    //         s = s.replace(/ab/g, "");
    //     }
    //     while(s.includes("ba")){
    //         a = s.match(/ba/g).length;
    //         points += y*a;
    //         s = s.replace(/ba/g, "");
    //     }
        
    // }
    

    // return points;

    let aCount = 0;
    let bCount = 0;
    let lesser = Math.min(x, y);
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let c = s.charAt(i);
        if (c > 'b') {
            result += Math.min(aCount, bCount) * lesser;
            console.log(i);
            console.log(Math.min(aCount, bCount) * lesser);
            aCount = 0;
            bCount = 0;
        } else if (c === 'a') {
            if (x < y && bCount > 0) {
                bCount--;
                result += y;
            } else {
                aCount++;
            }
        } else if (c === 'b') {
            if (x > y && aCount > 0) {
                aCount--;
                result += x;
            } else {
                bCount++;
            }
        }
    }

    result += Math.min(aCount, bCount) * lesser;
    return result;

};

s = "cbaabwbbbabbwaaq";
console.log(maximumGain(s, 4074, 9819))
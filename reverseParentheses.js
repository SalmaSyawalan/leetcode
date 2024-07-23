/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    var currStr = "", bp, rev="";

    while(s.includes("(")){
        bp = s.indexOf(")");
        for(var i = bp-1; !(s[i] == "("); i--){
            currStr += s[i];
        }
        // join depan, hasil rotate, belakang
        // tapi gaselalu ada depan belakang
        // bisa aja buang dulu atau pake slice, get position fp(i) sm bp+1
        console.log(i);
        rev = [s.slice(0, i), currStr, s.slice(bp+1)].join("");
        console.log(rev);
        s = rev;
        currStr = "";
    }
    return s;
};

var s = "(u(love)i)";
console.log(reverseParentheses(s));
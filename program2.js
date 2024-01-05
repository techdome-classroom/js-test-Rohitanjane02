/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romNum = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
      };
    
      let res = 0;
    
      for (let i = 0; i < s.length; i++) {
        const currVal = romNum[s[i]];
        const nextVal = romNum[s[i + 1]];
    
        if (nextVal > currVal) {
          res += nextVal - currVal;
          i++; 
        } else {
          res += currVal;
        }
      }
    
      return res;
};


module.exports={romanToInt}
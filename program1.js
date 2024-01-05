/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
  
      if (ch === '(' || ch === '[' || ch === '{') {
        stack.push(char);
      } else if (ch === ')' || ch === ']' || ch === '}') {
       
        const lastOpen = stack.pop();
        
  
        if ( (ch === ')' && lastOpen !== '(') || (ch === ']' && lastOpen !== '[') ||  (ch === '}' && lastOpen !== '{')) {
          return false;
        }
      }
    }
};

console.log(isValid)
module.exports = { isValid };



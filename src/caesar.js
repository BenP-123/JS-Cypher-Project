// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    if(shift == 0 || shift < -25 || shift > 25) return false;
    input = input.toLowerCase();
    let curChar = '';
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    let output = "";
    if(!encode) shift*=-1;
    
    for(let c in input){
      curChar = input[c];
      if(alpha.includes(curChar)){
        let index = alpha.search(curChar);
        index = index + shift;
        if(index > 25){
          index = index - 26;
        }
        else if(index < 0){
          index = index + 26;
        }
        output += alpha[index]
      }
      else{
        output += curChar;
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

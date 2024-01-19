// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet) return false;
    if(alphabet.length != 26) return false;

    for(let c in alphabet){
      const curChar = alphabet[c];
      for(let i = c; i < alphabet.length-1; i++){
        if(curChar == alphabet[i+1]) return false;
      }
    }
    let output = "";
    const alpha = "abcdefghijklmnopqrstuvwxyz"; 
    if(!encode){
      for(let c in input){
        const curChar = input[c];
        if(curChar == " ") output += " ";
      
        else output += alpha[alphabet.search(curChar)];
      }
      return output;
    }
    
    for(let c in input){
      const curChar = input[c];
      if(curChar == " ") output += " ";
      
      else output += alphabet[alpha.search(curChar)];
    }
    return output;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

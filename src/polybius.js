// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if(!encode && input.replace(/ /g, '').length%2 != 0) return false; 
    const grid = [
      ['a','f','l','q','v'],
      ['b','g','m','r','w'],
      ['c','h','n','s','x'],
      ['d',"i/j",'o','t','y'],
      ['e','k','p','u','z'],
    ];
    const keys = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42",
      "k": "52", "l": "13", "m": "23", "n": "33", "o": "43",
      "p": "53", "q": "14", "r": "24", "s": "34", "t": "44",
      "u": "54", "v": "15", "w": "25", "x": "35", "y": "45",
      "z": "55",
    }
    let output = "";
    if(!encode){
      for(let i = 0; i < input.length; i++){
        if(input[i] == " ") output+=" ";
        else{
          output += grid[input[i]-1][input[i+1]-1];
          i++;
        } 
      }
      return output;
    }
    for(let c in input){
      if(input[c] == " ") output += " ";
      else output += keys[input[c]];
    }
    return output;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

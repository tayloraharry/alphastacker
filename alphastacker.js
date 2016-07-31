var Alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","w","v","x","y","z"];

for (var i = 0; i < Alphabet.length; i++) {
  var alphabetOutput = "";
  for (var k = 0; k < i; k++) {
    alphabetOutput += Alphabet[k];
  if ((k + 1)%5 === 0) {
    alphabetOutput += ' '
  }
  }
  console.log(alphabetOutput);
}


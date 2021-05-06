function caesarCipher(string, shift, action) {
  const lettersArray = string.split('');
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const numberSign = action === 'encode' ? shift : -shift;

  return lettersArray.map((letter) => {
    const letterInLowerCase = letter.toLowerCase();
    const caseCheck = /[A-Z]/g;

    if (alphabet.includes(letterInLowerCase)) {
      let index = (alphabet.indexOf(letterInLowerCase) + Number(numberSign)) % alphabet.length;

      if (index < 0) index += alphabet.length;

      if (letter.match(caseCheck)) {
        return alphabet[index].toUpperCase();
      }

      return alphabet[index];
    }

    return letter;
  }).join('');
}

module.exports.caesarCipher = caesarCipher;

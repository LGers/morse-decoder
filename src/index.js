const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

/**
 * Convert string of 0 and 1 to morse Code
 * @param morseStr
 * @returns {string}
 */
const numToMorse = (morseStr) => {
  if (morseStr === '**********') return ' ';
  let morse = '';
  for (let i = 0; i < 5; i++) {
    let number = +(morseStr[i * 2] + morseStr[i * 2 + 1])
    if (number) {
      if (number === 10) {
        morse += '.';
      } else morse += '-';
    }
  }
  return morse;
};

function decode(expr) {
  const symbols = expr.length / 10;
  let symbolsArray = [];
  let morseString = '';
  console.log(symbols);
  for (let i = 0; i < symbols; i++) {
    symbolsArray = [...symbolsArray, expr.slice(i * 10, (i + 1) * 10)];
  }
  console.log(symbolsArray);
  symbolsArray.forEach((el) => {
    const char = numToMorse(el);
    // console.log(numToMorse(el));
    if (char === ' ' ) {
      morseString += char;
    } else {
      morseString += MORSE_TABLE[char];
    }
      // for (let i = 0; i < 5; i++) {
      //   let number = +(el[i * 2] + el[i * 2 + 1])
      //   console.log(number);
      //   if (!number) {
      //     if (number === 10) {
      //       morseArray.push('.');
      //     } else morseArray.push('-');
      //   }
      // }
    }
  );
  // console.log(morseString);
  return morseString;
}

module.exports = {
  decode
}

// const expr = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

// numToMorse('0010101011');
// decode(expr);
#!/usr/bin/env node

const { ROMAN_NUMERAL_MAP } = require('./constants');

// taking the input number from the command line
const input = process.argv[2];

const convertToRomanNumeral = num => {
  // basic validation
  if (!num || isNaN(num)) throw new Error('Please provide a valid input value!');

  // remainder will be initiated as the input value
  // and will be used to track how much of the input number has not been converted yet
  let remainder = Math.floor(num);
  let output = '';

  for (const numeralValue of Object.keys(ROMAN_NUMERAL_MAP)) {
    const decimalValue = ROMAN_NUMERAL_MAP[numeralValue];
    // validating that the current remainder value can be represented with a specific sequence of symbols 20 -> 2 (X)
    const symbolNumber = Math.floor(remainder / decimalValue);
    // if we do not have any symbols to represent the current remainder we continue the iteration to the next symbol
    if (!symbolNumber) continue;

    // subtracting the converted value from the remainder
    remainder -= symbolNumber * decimalValue;

    // appending the roman numeral sequence to the output (20) XX
    output += numeralValue.repeat(symbolNumber);
  }

  return output;
};

console.log(convertToRomanNumeral(input));
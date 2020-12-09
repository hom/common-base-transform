const octal = '177';

// transform octal to binary base
const binary = Number.parseInt(octal, 8).toString(2);
console.log(binary);

// transform octal to decimal base
const decimal = Number.parseInt(octal, 8);
console.log(decimal);

// transform octal to hexadecimal base
const hexadecimal = Number.parseInt(octal, 8).toString(16);
console.log(hexadecimal);

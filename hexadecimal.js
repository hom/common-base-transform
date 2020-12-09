const hexadecimal = '0xfff';

// transform hexadecimal to binary base
const binary = Number.parseInt(hexadecimal, 16).toString(2);
console.log(binary);

// transform hexadecimal to octal base
const octal = Number.parseInt(hexadecimal, 16).toString(8);
console.log(octal);

// transform hexadecimal to decimal base
const decimal = Number.parseInt(hexadecimal, 16);
console.log(decimal);

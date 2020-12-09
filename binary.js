const binary = '0101010110';

// transform binary to octal base
const octal = Number.parseInt(binary, 2).toString(8);
console.log(octal);

// transform binary to decimal base
const decimal = Number.parseInt(binary, 2);
console.log(decimal);

// transform binary to hexadecimal base
const hexadecimal = Number.parseInt(binary, 2).toString(16);
console.log(hexadecimal);

const decimal = '255';

// transform decimal to octal base
const binary = Number.parseInt(decimal, 10).toString(2);
console.log(binary);

// transform decimal to octal base
const octal = Number.parseInt(decimal, 10).toString(8);
console.log(octal);

// transform decimal to hexadecimal base
const hexadecimal = Number.parseInt(decimal, 10).toString(16);
console.log(hexadecimal);

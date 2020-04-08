const numbers = [1, 2, 3];
const joined = numbers.join(',');
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');
console.log(parts);

const combined = parts.join('-');
console.log(combined);


for (let part of parts)
    console.log(part);

parts.forEach((part, index) =>
    console.log(part, index));
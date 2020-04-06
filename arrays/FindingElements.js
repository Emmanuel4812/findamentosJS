const numbers = [1, 2, 3, 1];

console.log(numbers.indexOf('a'));// si el elemento no esta en la lista imprime un -1

console.log(numbers.indexOf(1));// si el elemento si esta en la lista se imprime 0

console.log(numbers.indexOf(1, 2));// imprime el indice del segundo numero 1

console.log(numbers.indexOf(1) !== -1);//imprime true

console.log(numbers.includes(1));// imprime true es lo mismo que el ejercicio de arriba




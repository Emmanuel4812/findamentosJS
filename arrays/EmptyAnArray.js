let numbers = [1,2,3,4];
let another = numbers;

//solution1
//numbers = [];

//solution2
//numbers.length = 0;

//solution3
//numbers.splice(0, numbers.length);

//solutio4
while (numbers.length > 0)
    numbers.pop();

console.log(another);
console.log(numbers);
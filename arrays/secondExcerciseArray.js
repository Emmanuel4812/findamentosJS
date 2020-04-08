/*const numbers = arrayFromRange(1, 10);

function arrayFromRange(min, max) {
    const output = [];
    for  (let i = min; i <= max; i++)
        output.push(i);
    return output;
}

console.log(numbers);*/


const numbers = includes([1,3,5,6,7,10], 50)


function includes (array, searchElement){
    for (let element of array)
     if (element === searchElement)
        return true;
    return false;
}






console.log(numbers);

//console.log(numbers.indexOf(1));// si el elemento si esta en la lista se imprime 0
const numbers = [1, 2, 3, 4, 1, 1];//se crea una lista de numeros


const output = except(numbers, [1, 2]);// se ejecuta la funcion que borrara los numero indicados



function except(array, excluded){
    const output = []                      //se declara una lista vacia
    for (let element of array)                                          
        if(!excluded.includes(element))   //se declara que no incluya en la lista mutada los numeros indicados
         output.push(element);
    return output;
}

console.log(output);
//.push adiere elementos a una lista
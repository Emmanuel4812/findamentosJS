const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

/*const course = courses.find(function(course) {   //se crea una funcion de regrese los datos del objeto pedido
    return course.name === 'a'; //si se cambia a un nombre desconocido regresa no definido
});

console.log(course);*/


const course = courses.findIndex(function(course) {  //encuentra el index del objeto en la lista
    return course.name === 'a'; 
});

console.log(course);

/*const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function(){
        console.log('draw');
    }
};

circle.draw();*/

const aufonos = {
    bocinas: 2,
    cable: 1,
    control: true,
    numeroDeLote: {
        bodega: 1300,
        departamento:10
    },
    draw: function(){
        console.log('draw');
    }
};

for (let key in aufonos)
    console.log(key, aufonos[key]);

if('bocinas' in aufonos) 
    console.log('yes');

for (let key of Object.keys(aufonos))
    console.log(key);


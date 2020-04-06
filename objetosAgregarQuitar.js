const circle = {
    radius:1

};

circle.color = 'amarillo';
circle.draw = function(){
    console.log('black')
};

delete circle.color;

console.log(circle);
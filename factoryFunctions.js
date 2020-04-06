//Factory Function

/*function createCircle(radius, location) {
    return {
        radius: radius,

        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(30)
console.log(circle2)*/

function createTShirt(size, color){
    return{
        size,
        color,
        draw(){
            console.log('draw');
        }
    };
}

const TShirt = createTShirt('M', 'cafe');
console.log(TShirt);


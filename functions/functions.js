/*function walk () {
    console.log('walk');
}

walk();

let run = function() {
    console.log('run');
}

let move = run;
run();
move();*/

/*const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullname(){
        return `${person.firstName} ${person.lastName}`
    },

    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = 'Jhon Smith';

//getters => access properties
//setters => change (mutate) them

console.log(person);*/ //getters and setters

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
  
    set fullName(value){
        if(typeof value !== 'string') return;

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person.fullName = null;



console.log(person);
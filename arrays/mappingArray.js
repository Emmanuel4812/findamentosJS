const numbers = [1,-1,2,3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }) )
    .filter(obj => obj.value > 1);
//const items = filtered.map(n => '<li>' + n + '</li>');



console.log(items);
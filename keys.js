const glass= {
    name: 'glass',
    color: 'golden',
    price: '24',
    isCleaned: true
};

console.log(glass)
const keys = Object.keys(glass);
console.log(keys)


//output { name: 'glass', color: 'golden', price: '24', isCleaned: true }
//[ 'name', 'color', 'price', 'isCleaned' ]


const values = Object.values(glass);
console.log(values)
//output   [ 'glass', 'golden', '24', true ]


//delete.glass.isCleanned;
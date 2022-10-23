const store= new Map([
    ['mert',20],
    ['murat',30],
    ['semih',13]
]);
console.log(store.forEach((value,key) => console.log(`${key} - ${value}`)));
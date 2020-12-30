// merge / flatten an array
// input [[1, 2, 3, 4, 5, 6, 6, 8, 10], [1, 2, 3], [2, 2, 3]];
// output [1, 2, 3, 4, 5, 6, 6, 8, 10, 1, 2, 3, 2, 2, 3];
const arr1 = [[1, 2, 3, 4, 5, 6, 6, 8, 10], [1, 2, 3], [2, 2, 3]];
// solution 1:
const arr1Merged = arr1.reduce((acc, val) => acc.concat(val), []);
// solution 2:
const arr1WasMarged = arr1.reduce((acc, val) => [...acc, ...val], []);
// console.log("arr1Merged", arr1Merged);
// console.log("arr1WasMarged", arr1WasMarged);

// chunk an array
// input [1, 2, 3, 4, 5, 6, 6, 8, 10, 1, 2, 3, 2, 2, 3];
//  output [[1, 2, 3], [4, 5, 6], [6, 8, 10], [1, 2, 3], [2, 2, 3]]
const arr2 = [1, 2, 3, 4, 5, 6, 6, 8, 10, 1, 2, 3, 2, 2, 3];
const size = 3;
const arr2Chunked = arr2.reduce((newArr, item, idx) => {
    const sizeIdx = Math.floor(idx/size);
    if(!newArr[sizeIdx]) {
        newArr[sizeIdx] = [];
    }
    newArr[sizeIdx].push(item);
    return newArr;
}, []);
// console.log("arr2Chunked", arr2Chunked);

// change Array object => new array object
// input :
    // const animal = [
    //     {name : 'cat', age : 1},
    //     {name : 'dog', age : 3},
    //     {name : 'duck', age : 2},
    // ]

// output :
    // const animal = {
    //     'cat': {'age' : 1},
    //     'dog': {'age' : 3},
    //     'duck': {'age' : 2},
    // }

const animal = [
    {name : 'cat', age : 1},
    {name : 'dog', age : 3},
    {name : 'duck', age : 2},
]

const newAnimal = data => {
    return data.reduce((obj, item) => {
        obj[item.name] = {age : item.age};
        return obj;
    }, {});
}
const animalModified = newAnimal(animal);
console.log("animalModified", animalModified);

// create object count age are the same value
// input
// const users = [
//     { id: 11, name: 'Adam', age: 23, group: 'editor' },
//     { id: 47, name: 'John', age: 28, group: 'admin' },
//     { id: 85, name: 'William', age: 34, group: 'editor' },
//     { id: 97, name: 'Oliver', age: 28, group: 'admin' }
//   ];
// output {23: 1, 28: 2, 34: 1}

const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];
const groupByAge = data => {
    return data.reduce((obj, item) => {
        obj[item.age] = obj[item.age] + 1 || 1;
        return obj;
    }, {});
}
const getGroupByAge = groupByAge(users)
console.log("getGroupByAge", getGroupByAge);
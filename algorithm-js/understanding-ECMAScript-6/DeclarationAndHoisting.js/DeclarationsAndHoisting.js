

var window;
function getValue(condition) {

    var value;
    console.log(typeof value);
    if(condition) {
        value = "blue";
        return value;
    } else {
        return null;
    }
}
// console.log(getValue('b343lue'));
// const maxItems = 5;
// maxItems = 6;

const person = {
    name : 'Ngoc'
}

// works
person.name = "Duong";

// console.log(person);
// for(var i = 0; i< 10; i++) {
//     process(items[i]);
// }
// I can access here because declare with var
// console.log(i);

// var funcs = [];
// for(const i = 0; i < 10; i++) {
//     funcs.push(function(value) {
//         console.log(i);
//     })
// }
// funcs.forEach(function(func) {
//     func();
// })

// var funcs = [],
//     object = {
//         a : false,
//         b : true,
//         c : true
//     };

// for(const key in object) {
//     funcs.push(function() {
//         console.log('key', key);
//     })
// }

// funcs.forEach(function(func) {
//     func();
// })

var RegExp = "Hello!";
console.log(window.RegExp);
var ncz = "Hi!";
console.log(window.ncz);
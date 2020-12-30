let text = "𠮷a";
// console.log(text.length);
// console.log(text.charAt(0));
// console.log(text.charAt(1));
// console.log(text.charCodeAt(0));
// console.log(text.charCodeAt(1));

function is32Bit(c) {
    return c.codePointAt(0) > 0xFFFF;
}
// console.log(is32Bit("𠮷"));
// console.log(is32Bit("a"));

let normalized = values.map(function(text) {
    return text.normalize();
})

normalized.sort(function(first, second) {
    if(first < second) {
        return -1;
    } else if (first === second) {
        return 0;
    } else {
        return 1;
    }
})

let obj = {
    a:1,
    b:2
}

console.log(Object.entries(obj));

function toArray(c){
    return Object.entries(c);
}

console.log(toArray(obj));

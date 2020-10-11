/*
let arrayHibrido=[1,2,3,"x","y",10];

function filterList(a){
    for(let i=0;i<a.length;i++){
        if(typeof(a[i])=='string'){
            a[i]='##';
        }
    }
    let arrayNumbers=a.filter((string) => string !='##');
    return arrayNumbers;
}

console.log(filterList(arrayHibrido));
*/
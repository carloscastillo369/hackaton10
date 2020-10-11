/*
let arrayHibrido=["hola",4,23,"m",null,5,undefined,"x",11];

function filterList(a){
    for(let i=0;i<a.length;i++){
        if(typeof(a[i])!='string'){
            a[i]='##';
        }
    }
    let arrayString=a.filter((others) => others !='##');
    return arrayString;
}

console.log(filterList(arrayHibrido));
*/
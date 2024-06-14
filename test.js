/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

/*function simpleArraySum(ar) {
    let soma = 0;
    ar.forEach(item => {
        soma = soma + item;
    });
    return soma;
}

let minhaLista = [5, 2, 1,5, 2, 1,5, 2, 1,5, 2, 1,5, 2, 1,5, 2, 1,5, 2, 1,5, 2, 1,5, 2, 1,];
console.log(simpleArraySum(minhaLista));*/

function compareTriplets(a, b) {
    console.log(a[0]);
    console.log(b[2]);
    let alice = 0;
    let bob = 0;

    if(a[0] > b[0]){
         alice++ ;
    } else if (a[0] < b[0]) {
         bob++;
    }  

    if(a[1] > b[1]){
         alice++;
    } else if (a[1] < b[1]) {
         bob++;
    }  

    if(a[2] > b[2]){
         alice++;
    } else if (a[2] < b[2]) {
         bob++;
    }
    
     const arrayResultados = [alice, bob];
     return arrayResultados;
    
}


compareTriplets([10, 16, 7], 
                [3, 6, 7]);
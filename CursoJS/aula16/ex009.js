/*Função*/
function paraimpar(n){
    if(n%2==0){
        return 'Par!';
    }else{
        return 'Ímpar!'
    }
}

console.log(paraimpar(233));

/*Função com parâmetro definido*/
function soma(n1, n2 = 1){
    return n1 + n2;
}

console.log(soma(3));

/*Variável que recebe o valor de uma função*/
let res = function fatorial(n1){
    var fat = 1;
    for (var i = n1; i > 1; i-- ){
        fat *= i;
    }
    return fat;
}

//Passando para a variável uma função 
console.log(res(5));


/*Função recursiva*/
//Recursão acontece quando uma função chama ela mesma
let resultado = function fatorialRec(n1){
    if(n1 == 1 ){
        return 1;
    }else{
        return n1 * fatorialRec(n1-1);
    }
}

console.log(resultado(5));
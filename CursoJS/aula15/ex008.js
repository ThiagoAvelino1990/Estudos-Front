let num = [5,2,8,9,3];

num.push(1);//adicionando um novo elemento

console.log(`Nosso vetor é ${num}`);

//mostrando o tamanho do vetor num.length
console.log(`O vetor tem ${num.length} posições`);

//mostrando o elemento de acordo com a posição informada dentro dos colchetes
console.log(`O primeiro valor é ${num[0]}`);

//organizando o vetor do menor para o maior
console.log(`O vetor em ordem crescente é ${num.sort()}`);

//console.log(`Adicionando um novo elemento no vetor ${num.push(1)}`)

//imprimindo todos os elementos de um vetor
for (var i = 0; i < num.length; i++){
    console.log(`Elemento na posição ${i} => ${num[i]}`);
}

/**
 * Estrutura de repetição chamado for in
 * Esta estrutura é utilizada somente para para arrays ou objetos no JavaScript
 */
console.log('----------------------------------------------------------');

console.log('FOR IN');
for (let pos in num){
    console.log(`Elemento na posição ${pos} => ${num[pos]}`);   
}

/** 
 * função indexOf para buscar a chave aonde um determinado valor existe dentro do vetor
*/
console.log('----------------------------------------------------------');
console.log('Utilizando a função indexOf');
var valor = 4;

if (num.indexOf(valor) == -1){
    console.log(`Valor não existe na posição ${num.indexOf(valor)}`);
}else{
    console.log(`O valor ${valor} está na posição ${num.indexOf(valor)}`);
}


let amigo = {nome:`José`, 
            idade:32,
            sexo:`M`,
            peso: 104.00,
            emgracer(p=0){
                console.log('Emagreceu');
                this.peso -= p //this é uma palavra autoreferência ao objeto
            }};

/**Mostrando o tipo da variável amigo */            
console.log(typeof amigo);

/**Mostrando os atributos da variável amigo */
console.log(amigo);

/**Mostrando apenas um atributo */
console.log(amigo.nome);

amigo.emgracer(2);
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`);

/**Isso mostra que a própria variável tem funcionalidades dentro dela */

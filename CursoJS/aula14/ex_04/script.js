var numDiv = window.document.querySelector("input#num");

function calc(){              
    let numV   = Number(numDiv.value); 
    let tRes   = window.document.querySelector("select#seltab"); 
    
    if (numV < 0 || numV > 100 || numDiv.value.length == 0){
        window.alert('[ERRO] Verifique os dados e tente novamente !');
    }else{
        window.alert("Calculando...");
        tRes.innerHTML = '';
        for (let i = 1; i<= 10; i++){
            let itemOp = document.createElement('option'); //Criando um elemento option
            itemOp.text = `${numV} x ${i} = ${i * numV}`;
            tRes.appendChild(itemOp);                       //adicionando um elemento filho
        }
    }
}
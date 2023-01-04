/**
 * Declaração Variáveis
 */
var anoAtual    = new Date().getFullYear();                 
var mens        = window.document.querySelector('div#msg');
var dataAno     = window.document.getElementById('dateYear');

/**
 * Declaração funções
 */
function validar(){            
    var idade  = anoAtual - Number(dataAno.value);

    if(dataAno.value.length == 0 || Number(dataAno.value) > anoAtual){             
        window.alert('[ERRO] - Verifique os dados e tente novamente');    
    }else{  
        var sexo    = window.document.getElementsByName('sex');
        var gen     = "";
        var img     = window.document.createElement('img');                 //Criando um novo elemento com id 'img'
        img.setAttribute('id','foto');                                  //elemento.setAttribute(id, alt);

        if (sexo[0].checked){                                           //Verificar se o primeiro radio está marcado (checkbox)
            gen = "Masculino";
            if(idade >= 0 && idade < 4){
                //Criança
                img.setAttribute('src', 'Bebe.png');                    //1º parâmetro é o comando, no caso 'src' para buscar o arquivo. 2º parâmetro é o nome do arquivo com extensão
            }else if (idade < 15 ){
                img.setAttribute('src','Menino.png');
                 
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem.png');
            }else if (idade < 59){
                //adulto
                img.setAttribute('src', 'Homem.png');
            }else{
                //idoso
                img.setAttribute('src', 'Idoso.png');
            }
        }else{
            gen = "Feminino";
             if(idade >= 0 && idade < 4){
                //Criança
                img.setAttribute('src', 'Bebe.png');
            }else if (idade < 15 ){
                img.setAttribute('src','Menina.png');
                 
            }else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem.png');
            }else if (idade < 59){
                //adulto
                img.setAttribute('src', 'Mulher.png');
            }else{
                //idoso
                img.setAttribute('src', 'Idosa.png');
            }
        }        

        if(idade >= 120){
            mens.innerHTML = `<p>[OK] - Sexo: ${gen} - Idade: ${idade} anos</p>UM MITO !`;
        }else{
            
            mens.innerHTML = `<p>[OK] - Sexo: ${gen} - Idade: ${idade} anos</p>`;
        }
    }
    mens.appendChild(img);   
    
}

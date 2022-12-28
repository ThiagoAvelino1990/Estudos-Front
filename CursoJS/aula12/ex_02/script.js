function validar(){    
    var dataAno     = window.document.getElementById('dateYear');
    var anoAtual    = new Date().getFullYear();
    var idade       = anoAtual - Number(dataAno.value);
    var mens        = window.document.querySelector('div#msg');

    if(dataAno.value.length == 0 || Number(dataAno.value) > anoAtual){             
        window.alert('[ERRO] - Verifique os dados e tente novamente');    
    }else{  
        var sexo = window.document.getElementsByName('sex');
        var gen = "";
        var img = window.document.createElement('img');
        img.setAttribute('id','foto');

        if (sexo[0].checked){
            gen = "Masculino";
            if(idade >= 0 && idade < 4){
                //Criança
                img.setAttribute('src', 'Bebe.png');
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
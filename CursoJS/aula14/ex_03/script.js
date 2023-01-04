/**
* Utilizando a biblioteca https://unicode.org/emoji/charts/full-emoji-list.html dos emojis
* Entretanto, no JavaScript, para utilizar o emoji é necessário colocar a codificação conforme linhas 21 e 23
*/
var num     = window.document.querySelector("input#num");
var con     = window.document.querySelector("input#num2");
var mens    = "[ERRO] - Verifique os dados e tente novamente!";


function contador(){          
        if (Number(num.value) <= 0 || num.value == null || Number(num.value) > 20){
            window.alert(mens);
        }else if (Number(con.value) <= 0 || con.value == null || Number(con.value) > 5 || Number(con.value) > Number(num.value)){
            window.alert(mens);
        }else{
            var text    = "Contando... ";
            var res     = window.document.querySelector("div#res");
            res.innerHTML = text;            
            for (let indx = 1; indx <= Number(num.value); indx += Number(con.value)){
                if ((indx + Number(con.value)) > Number(num.value)){
                    res.innerHTML += `${indx} \u{1F4A5}`;
                }else{
                    res.innerHTML += `${indx} \u{1F449} `;
                }
            }
        }
}
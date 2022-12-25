function atualizarPagina(){
    var text = window.document.getElementById('msg');
    var img = window.document.getElementById('tempo');
    var hora = new Date().getHours();
    var min = new Date().getMinutes();
    

    text.innerHTML =`Agora são ${hora} horas e ${min} minutos`;
    if (hora < 12){        
        img.src = 'amanhecer.png';        
        document.body.style.background = '#153053';
    }else if (hora >= 12 && hora < 18){
        img.src = 'entardecer.png';        
        document.body.style.background = '#602533';
    }else{        
        img.src = 'anoitecer.png';
        document.body.style.background = '#003053';
    }
}
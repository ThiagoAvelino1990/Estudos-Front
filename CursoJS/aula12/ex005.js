var diaSem = new Date().getDay();
var hora = new Date().getHours();
var min = new Date().getMinutes();
var seg = new Date().getSeconds();

/**
 * No JavaScript os dias da semana são representados por números. E o primeiro dia da semana com o número 0
 * 0 - Domingo
 * 1 - Segunda-Feira
 * 2 - Terça-Feira
 * 3 - Quarta-Feira
 * 4 - Quinta-Feira
 * 5 - Sexta-Feira
 * 6 - Sábado
 */
switch(diaSem){
    case 0:
        console.log(`Domingo. ${hora}:${min}:${seg}`);
        break;
    case 1:
        console.log(`Segunda-Feira. ${hora}:${min}:${seg}`);
        break;
    case 2:
        console.log(`Terça-Feira. ${hora}:${min}:${seg}`);
        break;   
    case 3:
        console.log(`Quarta-Feira. ${hora}:${min}:${seg}`);
        break;
    case 4:
        console.log(`Quinta-Feira. ${hora}:${min}:${seg}`);        
        break;
    case 5:
        console.log(`Sexta-Feira. ${hora}:${min}:${seg}`);        
        break;
    case 6:
        console.log(`Sábado. ${hora}:${min}:${seg}`);
        break;
    default:
        console.log('[ERRO] - Dia informado inexistente !');
        break;
}
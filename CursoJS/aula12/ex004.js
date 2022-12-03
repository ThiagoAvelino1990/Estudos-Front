var hora = new Date().getHours();
var min = new Date().getMinutes(); 
var seg = new Date().getSeconds();

console.log(`Agora são ${hora} horas, ${min} minutos e ${seg} segundos`);

if (hora < 12){
    console.log(`Bom dia !`);
}else if (hora > 12 && hora < 18){
    console.log(`Boa tarde !`);
}else{
    console.log(`Boa noite !`);
}
const frm = document.querySelector("form");
const h2 = document.querySelector("h2");
const imc = document.getElementById("imc");

frm.addEventListener("submit", (e) => {

    const resposta = frm.kg.value / (frm.h.value * frm.h.value);
    const respostaImc = "";
    if(frm.genero.value == "M"){
    if(resposta < 18.5){
        imc.innerText = "Abaixo do peso";
    }else if( resposta >= 18.5 && resposta < 24.99){
        imc.innerText = "Peso normal";
    }else if(resposta >= 24.99 && resposta < 29.99){
        imc.innerText = "Sobrepeso";
    }else if(resposta >= 29.99 ){
        imc.innerText = "obesidade";
    }
}else if(frm.genero.value == "F"){
    if(resposta < 19.1){
        imc.innerText = "Abaixo do peso";
    }else if( resposta >= 19.1 && resposta < 25.8){
        imc.innerText = "Peso normal";
    }else if(resposta >= 25.8 && resposta < 27.3){
        imc.innerText = "Quase sobrepeso";
    }else if(resposta >= 27.3 && resposta < 32.3){
        imc.innerText = "Sobrepeso";
    }else if(resposta >= 32.3 ){
        imc.innerText = "obesidade";
    }
}
    h2.innerText = `IMC: ${resposta}`;
    e.preventDefault();
})
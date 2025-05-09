const frm = document.querySelector("form");
const rsp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const n = Number(frm.inNumero.value);
    if(n % 2 == 0){
        rsp.innerText = `O número ${n} é Par`;
    }else{
        rsp.innerText = `O número ${n} é Impar`;
    }
})
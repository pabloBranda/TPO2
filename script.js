function calcular(cantidad,categorias) {
    
    const ticket = 200;
    let estudiante = 0.15;
    let trainee = 0.50;
    let junior = 0.85;
    let resultado = 0;
    

    if (categorias == "estudiante"){
        resultado = (ticket * cantidad) * estudiante
    } else if (categorias == "trainee"){
        resultado = (ticket * cantidad) * trainee
    } else {
        resultado = (ticket * cantidad) * junior
    }

    return resultado
}

let formulario = document.getElementById("form_calculador");

let categorias = document.getElementById("categorias");

let cantidad = document.getElementById("cantidad");

let divResultado = document.getElementById("resultado");

formulario.addEventListener("reset", ()=>{
    divResultado.textContent = ""
})

formulario.addEventListener("submit", (evento)=>{
    evento.preventDefault();

    divResultado.textContent = "Total a pagar $" + calcular(cantidad.value,categorias.value)
})
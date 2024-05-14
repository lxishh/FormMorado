window.addEventListener("load",()=>{
    document.getElementById("btnContraste").addEventListener("click",oscuro);
    document.getElementById("btnValidar").addEventListener("click",validar);
    document.getElementById("btnFuente").addEventListener("click",fontsize);
    document.getElementById("parrafo").addEventListener("dblclick", ()=>{
        (alert("hola"))
    })
});

function oscuro(){
    var cuerpo = document.getElementById("idBody");
    cuerpo.classList.toggle("idBody");
    cuerpo.classList.toggle("modooscuro");
    var parrafito = document.getElementById("parrafo");
    parrafito.classList.toggle("pdefault");
    var tituloo = document.getElementsByClassName("titulo-default");
    for(var i = 0; i < tituloo.length; i++)
    {
        tituloo[i].classList.toggle("titulo-black");
        console.log(tituloo[i].className);
    }
    var boton = document.getElementById("btnValidar")
    boton.classList.toggle("button-black")

}

function fontsize(){
    document.body.classList.toggle("fontsize")
}

//no se recomienda poner una función flecha dentro de otra; es mejor llamar a una función.

//función flecha.

//funciones anonimas() crear una función sin darle nombre a la función.

//el load hace que se ejecture una vez que la página se haya cargado.

//Recupera elemento y está a la espera de escuchar un even-to (click); en caso de que hagan click llama a la función cambiar contraste.

//para que funcione, debe estar debajo de la etiqueta a la que estamos aplicando (no se recomienda).



function validar(){
    validarVacio('nombre');
    validarVacio('email');
    validarVacio('asunto');
    validarVacio('mensaje');
    validarLongitud('telefono',9);
}
function validarVacio(idCampo){
    let iNombre = document.getElementById(idCampo);
    console.log(iNombre);
    let nombre = iNombre.value;
    console.log(nombre);
    console.log(typeof(nombre))
    if(nombre.trim()==""){
        iNombre.style.borderColor = "red";
        let pNombre = document.getElementById("p"+idCampo);
        pNombre.style.display = "block";
    }else{
        iNombre.style.borderColor = "green";
        let pNombre = document.getElementById("p"+idCampo);
        pNombre.style.display = "none";
    }
}

function validarLongitud(campo,largo){
    let elemento = document.getElementById(campo);
    let valor = elemento.value;
    if (valor.length != largo){
        elemento.style.borderColor="red";
        let pElemento = document.getElementById('p'+campo);
        pElemento.style.display = "block";
    }else{
        elemento.style.borderColor = "green";
        let pElemento = document.getElementById('p'+campo);
        pElemento.style.display = "none";
    }

}

// function cambiarContraste(){
//     let eBody = document.body;
//     let eTextos = document.getElementsByClassName("titulo");
//     let eInputs = document.getElementsByTagName("input");
//     console.log(eInputs);
//     let fondo = eBody.style.backgroundColor;
//     if(fondo=="black"){
//         eBody.style.backgroundColor = "purple";
//         for (let index = 0; index < eTextos.length; index++) {
//             const element = eTextos[index];
//             element.style.color = "purple";
//         }
//         for (let index = 0; index < eInputs.length; index++) {
//             const element = eInputs[index];
//             element.style.borderColor = "purple";
//         }
//        // eH1.style.color = "purple";
//     }else{
//         eBody.style.backgroundColor = "black";
//         //eH1.style.color = "black";
//         for (let index = 0; index < eTextos.length; index++) {
//             const element = eTextos[index];
//             element.style.color = "black";
//         }

        
//         for (let index = 0; index < eInputs.length; index++) {
//             const element = eInputs[index];
//             element.style.borderColor = "black";
//         }
//     }
   
// }
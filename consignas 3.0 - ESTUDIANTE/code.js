/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 
 
 
 datosPersona.nombre = prompt ("Acá ingresá tu nombre")
 let calculoEdad = function(){
   anioNac = prompt ("Acá ingresá año de nacimiento")
   let calculo = 2022 - anioNac
   return calculo
 }
 datosPersona.edad = calculoEdad()
 datosPersona.ciudad = prompt ("Acá ingresá la ciudad donde vives")
 datosPersona.interesPorJs = confirm("Acá decime si te gusta JavaScript")


}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  
  
  
  document.getElementById ("nombre").innerHTML = datosPersona.nombre
  document.getElementById ("edad").innerHTML = datosPersona.edad
  document.getElementById ("ciudad").innerHTML = datosPersona.ciudad
  let javaScript = document.getElementById ("javascript")
  if (datosPersona.interesPorJs){
    javaScript.innerHTML = "Si"
  }else{
    javaScript.innerHTML = "No"
  }

}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  


  let divContenedor = document.getElementById ("fila")
  divContenedor.innerHTML = ""
  
  
  listado.forEach(i => {
    
    
    let tarjeta = document.createElement("div")
    let img = document.createElement ("img")
    let parrafo1 = document.createElement ("p")
    let parrafo2 = document.createElement ("p")
    
    
    divContenedor.appendChild(tarjeta)
    tarjeta.appendChild (img)
    tarjeta.appendChild (parrafo1)
    tarjeta.appendChild(parrafo2)
    
    
    tarjeta.className = "caja"
    img.src = i.imgUrl
    parrafo1.className = "lenguaje"
    parrafo1.innerText = i.lenguajes
    parrafo2.className = "bimestre"
    parrafo2.innerText = i.bimestre

    
    if (i.lenguajes == "HTML y CSS"){
      img.setAttribute ("alt", "CSS Y HTML")
    } else if
      (i.lenguajes == "Javascript"){
        img.setAttribute ("alt", "Javascript" )
      }else if (i.lenguajes == "React JS"){
        img.setAttribute ("alt", "React JS")
      }

      
    

  
  })

  
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 


  const divSitio = document.querySelector ("#sitio")
  divSitio.classList.toggle("dark")



}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */


let textoOculto = document.getElementById("sobre-mi")
window.addEventListener("keypress", function(e) {
  if (e.key == "f" || e.key == "F") {
    textoOculto.removeAttribute("class", "oculto")
  }

})
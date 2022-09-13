//Utiliza todos los metodos que creaste en la clases del archivo 02 class.js
import {Informacion1, Informacion2} from "./02_Class.js";

let personaje = document.getElementById("personaje");
let episodio = document.getElementById("episodio");
let habilidad = document.getElementById("habilidad");
let nivel = document.getElementById("nivel");
let arma = document.getElementById("arma");
let inf = document.getElementById("inf")
let boton = document.getElementById("boton");
let informacio = new Informacion1()
let informacio2 = new Informacion2()

boton.addEventListener("click", function(){
    informacio.nom(personaje.value, episodio.value);
    informacio2.nom2(habilidad.value, nivel.value, arma.value);
    inf.innerHTML= informacio.dato1();
    inf.innerHTML+= informacio.dato2();
    inf.innerHTML+= informacio2.dato3();
    inf.innerHTML+= informacio2.dato4();
    inf.innerHTML+= informacio2.dato5();
})

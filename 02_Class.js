class Informacion1{
    constructor(){
        this.personaje = null;
        this.episodio = null;
    }
    //Crea metodos para consultar y editar las propiedades
    nom(personaje, episodio){
        this.personaje = personaje;
        this.episodio = episodio;
    }
    dato1(){
        return this.personaje;
    }
    dato2(){
        return this.episodio;
    }
}

class Informacion2{
    constructor(){
        this.habilidad = null;
        this.nivel = null;
        this.arma = null;
    }
    nom2(habilidad, nivel, arma){
        this.habilidad = habilidad;
        this.nivel= nivel;
        this.arma = arma;
    }
    dato3(){
        return this.habilidad;
    }
    dato4(){
        return this.nivel;
    }
    dato5(){
        return this.arma;
    }
    
    //Crea metodos para consultar las propiedades

}

export{Informacion1, Informacion2};


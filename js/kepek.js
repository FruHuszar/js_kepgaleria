import Kep from "./kep.js";

export default class Kepek {
    #lista=[];
    constructor(lista, szuloElem){
        this.#lista = lista;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        this.szuloElem.innerHTML = "";
        this.#lista.forEach( (elem,i)=>{
            const k = new Kep(elem, this.szuloElem, false)
        })
    }
}
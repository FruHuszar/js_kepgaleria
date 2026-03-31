import { keplista } from "./keplista.js";
import Kepek from "./kepek.js";
import Kep from "./kep.js";
import Nyil from "./nyil.js";

const szuloELem = document.querySelector(".kis-kepek")
const nagyKepElem = document.querySelector(".nagy-kep")
const balraElem = document.getElementsByClassName("nyil-helye")[0];
const jobbraElem = document.getElementsByClassName("nyil-helye")[1];

let index = 0;

new Kepek(keplista, szuloELem);
new Nyil("<", -1, balraElem);
new Nyil(">", 1, jobbraElem);

const kezdokep = new Kep(keplista[0], nagyKepElem, true);
window.addEventListener("kivalaszt",(event)=>{
    index = event.detail;
    nagyKepElem.innerHTML = "";
    const fokep = new Kep(keplista[index], nagyKepElem, true);
})

window.addEventListener("lepes",(event)=>{
    index = (index + event.detail + keplista.length) % keplista.length;
    nagyKepElem.innerHTML = "";
    const fokep = new Kep(keplista[index], nagyKepElem, true);
})
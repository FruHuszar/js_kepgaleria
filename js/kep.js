export default class Kep {
    #obj = {};
    constructor(obj = { index, src, cim, leiras }, szuloELem, szoveggel) {
        this.#obj = obj;
        this.szuloELem = szuloELem;
        this.szoveggel = szoveggel;
        this.megjelenit();
        
        const kepElem = document.querySelector(".kep:last-child");
        kepElem.addEventListener("click", (event)=> {
            this.esemeny()
        })
    }

    megjelenit() {
        let html = `
            <div class="kep" id="${this.#obj.index}">
                <img src="${this.#obj.src}" alt="${this.#obj.cim}">
            `
        html += (this.szoveggel) ? `<h2>${this.#obj.cim}</h2><p>${this.#obj.leiras}</p></div>` : `</div>`;
        this.szuloELem.insertAdjacentHTML("beforeend", html); 
    }

    getObj() { return this.#obj; }
    
    esemeny(){
        console.log("saját kép katt esemény")
        const e = new CustomEvent("kivalaszt",{detail:this.#obj.index})
        window.dispatchEvent(e)
    }
}
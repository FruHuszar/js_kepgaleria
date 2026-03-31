export default class Nyil {
    #szoveg = "";
    #lepesmerre = 1;
    constructor(szoveg, lepesmerre, szuloELem, szoveggel) {
        this.#szoveg = szoveg;
        this.#lepesmerre = lepesmerre
        this.szuloELem = szuloELem;
        this.megjelenit();
        this.nyilElem.addEventListener("click", (event)=> {
            this.lepesemeny()
        })
    }
    
    megjelenit() {
        const button = document.createElement("button");
        button.className = "nyil";
        button.textContent = this.#szoveg;
        this.szuloELem.appendChild(button);
        this.nyilElem = button;
}
    
    lepesemeny(){
        console.log("saját nyíl katt esemény")
        const e = new CustomEvent("lepes",{detail:this.#lepesmerre})
        window.dispatchEvent(e)
    }
}
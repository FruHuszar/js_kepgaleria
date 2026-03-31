# Javascript OOP Galéria

## CustomEvent

lépés (nyilak) és kiválaszt (képikonok)

```javascript
// event.detail: 0...5
window.addEventListener("kivalaszt",(event)=>{
    index = event.detail;
    nagyKepElem.innerHTML = "";
    const fokep = new Kep(keplista[index], nagyKepElem, true);
})

// event.detail: 1 vagy -1
window.addEventListener("lepes",(event)=>{
    index = (index + event.detail + keplista.length) % keplista.length;
    nagyKepElem.innerHTML = "";
    const fokep = new Kep(keplista[index], nagyKepElem, true);
});
```

## wrap-around a lépéseknél

1. index + event.detail → lépés
2. + keplista.length → ne tudjon lemenni negatívba az index
3. % keplista.length → maradjunk a tömb határain belül

```javascript
index = (index + event.detail + keplista.length) % keplista.length;
```

## Elem és azonnali referencia
Ha egy elemet createElement-tel hozunk létre, rögtön eltárolhatjuk egy változóban, így közvetlenül hozzá tudunk adni eseménykezelőt (addEventListener), anélkül, hogy később kellene keresni a DOM-ban.
Így nem fognak összeakadni a nyilak, és az sem probléma ha a szülőelemben másfajta elemeket hozunk létre.

```javascript
//nyilak osztály

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
```
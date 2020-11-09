const body = document.body;
const btn = document.querySelector( "button");
const hexCode = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.onclick = function() {
    let i, hex = "#";
    for ( i = 0; i<6; i++ ) {
        const randomSayi = Math.floor( Math.random() * hexCode.length);
        hex += hexCode[ randomSayi ];
    }

    body.style.background = hex;
    this.innerHTML = hex;
}

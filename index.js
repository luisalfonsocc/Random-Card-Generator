

const tagNumber = document.querySelector('#number');
const tagTopSymbol = document.querySelector('#top-symbol');
const tagBottomSymbol = document.querySelector('#bottom-symbol');


let time = 1000

function randomNumber() {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let numberRandom = Math.floor(Math.random() * number.length);

    return (number[numberRandom]);
}

function randomSymbol() {
    let symbol = ["♦", "♥", "♠", "♣"];
    let symbolRandom = Math.floor(Math.random() * symbol.length);
    return (symbol[symbolRandom]);
}


document.getElementById("button").addEventListener("click", function () {

location.reload()
randomCard ();
   
});

function adjust() {

    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;
    const square = document.getElementById("square");
    square.style.width = width + "px";
    square.style.height = height + "px";


}



function randomCard() {

let printSymbol = randomSymbol();

if (printSymbol == "♥" || printSymbol == "♦" ) {
    tagTopSymbol.classList.add("text-danger");
    tagBottomSymbol.classList.add("text-danger");

} else {
    if (printSymbol == "♠" || printSymbol == "♣") {
        tagTopSymbol.classList.add("text-dark");
        tagBottomSymbol.classList.add("text-dark");
    }
}

tagNumber.innerHTML = randomNumber();
tagTopSymbol.innerHTML = printSymbol;
tagBottomSymbol.innerHTML = printSymbol;
}

randomCard ();


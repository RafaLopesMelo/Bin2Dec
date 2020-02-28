let bin = document.body.querySelector("#bin");
let dec = document.body.querySelector("#dec");

bin.addEventListener("keyup", () => {
    if (event.keyCode === 13){bin2dec()}
})

function bin2dec() {
    dec.value = parseInt(bin.value, 2);
    if (dec.value == "NaN"){
        alert("Digite apenas os números 1 e 0!");
        bin.value = ("");
        dec.value = ("");
    }
}
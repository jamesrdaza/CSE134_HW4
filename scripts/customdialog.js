let output = document.querySelector("output");
let value = "";
let custom = document.getElementById("promptDialog");
let custom2 = document.getElementById("alertDialog");
let confirmBtn = document.querySelector('#confirmBtn');

let alertBtn = document.querySelector("#alert");
alertBtn.addEventListener("click", () => {
    custom2.showModal();
})

let confirmButton = document.querySelector("#confirm");
confirmButton.addEventListener("click", () => {
    output.value = "confirmed"
})

let promptBtn = document.querySelector("#prompt");
promptBtn.addEventListener("click", () => {
    custom.showModal();
    let btn = document.querySelector("#confirmBtn");
    let val = document.querySelector("#name");
    btn.addEventListener("click", () => {
        let inputVal = DOMPurify.sanitize(val.value)
        output.value = `The prompt value is: ${inputVal}`;
    })
})
let output = document.querySelector("output");
let value = "";

let alertBtn = document.querySelector("#alert");
alertBtn.addEventListener("click", () => {
    alert("This is an alert.");
})

let confirmBtn = document.querySelector("#confirm");
confirmBtn.addEventListener("click", () => {
    output.value = `The value returned by the confirm method is : ${value}`
    confirm("Confirm Button Pressed");
})

let promptBtn = document.querySelector("#prompt");
promptBtn.addEventListener("click", () => {
    let val = prompt("Please enter value: ");
    if (val) {
        output.value = `The value returned by the prompt method is : ${val}`
    }
    else if (val == "") {

        output.value = `User did not enter anything`
    }
})

let saferPromptBtn = document.querySelector("#saferPrompt");
saferPromptBtn.addEventListener("click", () => {

    let val = prompt("Please enter value: ");
    let sanitizedVal = DOMPurify.sanitize(val);
    if (sanitizedVal) {
        output.value = `The value returned by the confirm method is : ${sanitizedVal}`
    }
    else if (val == "") {

        output.value = `User did not enter anything`
    }
})
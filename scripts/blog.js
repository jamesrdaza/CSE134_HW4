let data = [];
if (localStorage.getItem("movies")) {
    data = JSON.parse(localStorage.getItem("movies"));
} else {
    data = [];
    localStorage.setItem("movies", JSON.stringify(data));
}

let postSection = document.querySelector("#posts");
function loadItems() {
    for (let i = 0; i < data.length; i++) {
        let temp = document.querySelector("template");
        let clone = temp.content.cloneNode(true);
        let dialog = clone.firstChild;
        console.log(clone.firstChild.nextSibling.childNodes);

        let valTitle = clone.firstChild.nextSibling.childNodes[3];
        let valDate = clone.firstChild.nextSibling.childNodes[5];
        let valSummary = clone.firstChild.nextSibling.childNodes[7];
        let editBtn = clone.firstChild.nextSibling.childNodes[9];
        let deleteBtn = clone.firstChild.nextSibling.childNodes[11];

        editBtn.addEventListener("click", () => {
            dialog.nextSibling.firstChild.nextSibling.showModal();
            let title = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[0];
            let date = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[1];
            let summary = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[2];
            let confirmBtn = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[3];
            confirmBtn.addEventListener("click", () => {
                valTitle.innerText = title.value;
                valDate.innerText = date.value
                valSummary.innerText = summary.value
            })
            console.log(title);
            updateMovie(title.value, date.value, summary.value);
        });

        deleteBtn.addEventListener("click", () => {
            console.log(valTitle.innerText);
            deleteMovie(valTitle.innerText);
            deleteBtn.parentElement.remove();
        });

        let title = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[0];
        let date = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[1];
        let summary = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[2];
        title.innerText = data[i].title;
        console.log(title.innerText);
        date.innerText = data[i].date
        summary.innerText = data[i].summary;

        postSection.appendChild(clone);

        console.log(dialog.nextSibling.firstChild.nextSibling.firstChild);
    }
}

document.body.onload = loadItems;
let addMovie = document.querySelector("#addMovie")
addMovie.addEventListener("click", () => {
    let temp = document.querySelector("template");
    let clone = temp.content.cloneNode(true);
    let dialog = clone.firstChild;
    console.log(clone.firstChild.nextSibling.childNodes);

    let valTitle = clone.firstChild.nextSibling.childNodes[3];
    let valDate = clone.firstChild.nextSibling.childNodes[5];
    let valSummary = clone.firstChild.nextSibling.childNodes[7];
    let editBtn = clone.firstChild.nextSibling.childNodes[9];
    let deleteBtn = clone.firstChild.nextSibling.childNodes[11];

    editBtn.addEventListener("click", () => {
        dialog.nextSibling.firstChild.nextSibling.showModal();
        let title = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[0];
        let date = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[1];
        let summary = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[2];
        let confirmBtn = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[3];
        confirmBtn.addEventListener("click", () => {
            valTitle.innerText = title.value;
            valDate.innerText = date.value
            valSummary.innerText = summary.value
        })
        console.log(title);
        updateMovie(title.value, date.value, summary.value);
    });

    deleteBtn.addEventListener("click", () => {
        console.log(valTitle.innerText);
        deleteMovie(valTitle.innerText);
        deleteBtn.parentElement.remove();
    });

    clone.addEventListener("click", () => {
        console.log("test");
        dialog.showModal();
    });

    postSection.appendChild(clone);
    dialog.nextSibling.firstChild.nextSibling.showModal();

    let title = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[0];
    let date = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[1];
    let summary = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[2];
    let confirmBtn = dialog.nextSibling.firstChild.nextSibling.firstChild.nextSibling[3];
    confirmBtn.addEventListener("click", () => {
        valTitle.innerText = title.value;
        valDate.innerText = date.value
        valSummary.innerText = summary.value
        createMovie(title.value, date.value, summary.value)
    })
    console.log(dialog.nextSibling.firstChild.nextSibling.firstChild);
})


function createMovie(title, date, summary) {
    data.push({ title, date, summary });
    localStorage.setItem("movies", JSON.stringify(data));
}

function updateMovie(title, date, summary) {
    for (let i = 0; i < data.length; i++) {
        if (title === data[i].title) {
            data[i].date = date;
            data[i].summary = summary;
        }
    }
    localStorage.setItem("movies", JSON.stringify(data));
}

function deleteMovie(title) {
    for (let i = 0; i < data.length; i++) {
        if (title === data[i].title) {
            data.splice(i, 1);
        }
    }
    localStorage.setItem("movies", JSON.stringify(data));
}
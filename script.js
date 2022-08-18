let N = 10;
let counter;
let currentCells = [];
let lastCells = [];
let firstClick = true;
let h
let v

(function init() {
    createTable();
})();

function rebuildTable() {
    if (sizeInput.value < 100 && sizeInput.value > 0) {
        err.innerText = '';
        document.getElementById('myTable').innerHTML = '';
        N = sizeInput.value;
        createTable();
    }
    else {
        err.innerText = "You entered an invalid number";
    }
}

function createTable() {
    for (h = 1; h <= N; h++) {
        myTable.insertAdjacentHTML("beforeend", `<tr class = "rows${h}" id = "row${h}"></tr>`);
        counter = `row${h}`;
        for (v = 1; v <= N; v++) {
            console.log(counter);
            document.getElementById(`${counter}`).insertAdjacentHTML("beforeend", `<th class = "row${h} column${v}">${(h * v)}</th>`);
        }
    }
}

myTable.addEventListener("click", paintCells);

function paintCells() {
    // Clear painted cells
    if (firstClick == false) {
        lastCells.forEach(change => {
            change.style.backgroundColor = "rgb(45, 172, 241)";
        });
    }
    // Find relevent cells

    currentCells = document.querySelectorAll(`.${event.target.classList[1]}, .${event.target.classList[0]}`);

    //Highlight relevent cells
    currentCells.forEach(change => {
        change.style.backgroundColor = "rgb(242, 255, 146)";
    });

    // Write to memory current cells
    lastCells = currentCells;
    firstClick = false;
}

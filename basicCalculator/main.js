function display(val) {
    document.getElementById("textval").value += val;
}

// function evaluate() {
//     let x = document.getElementById("textValue").value;
//     let y = sum(x);
//     document.getElementById("textValue").value = y;
// }

function equals() {
    let initialValue = document.getElementById("textval").value;
    let calculateValue = eval(initialValue);
    document.getElementById("textval").value = calculateValue;
}

function clr() {
    document.getElementById("textval").value = "";
}

function deleteButton() {
    // document.getElementById("textval").value = "";

    let x = document.getElementById("textval").value;

    let emptyArr = [];

    // document.getElementById("textval").value = "";
    for (let j = 0; j < x.length - 1; j++) {
        emptyArr += x[j];
    }
    document.getElementById("textval").value = emptyArr;



}
// Part 1

const jumbotron = document.querySelector(".jumbotron");
const donateBike = document.querySelector(".buttons .btn-primary");
const volunteer = document.querySelector(".buttons .btn-secondary");

//Blue button

const blueButton = document.querySelector("#blueBtn");
blueButton.addEventListener("click", addStuff);

function addStuff() {
    jumbotron.style.backgroundColor = "#588fbd";
    donateBike.style.backgroundColor = "#ffa500";
    volunteer.style.backgroundColor = "black";
    volunteer.style.color = "white";
}

// Orange button

const orangeButton = document.querySelector("#orangeBtn");
orangeButton.addEventListener("click", changeStuff);

function changeStuff () {
    jumbotron.style.backgroundColor = "#f0ad4e";
    donateBike.style.backgroundColor = "#5751fd";
    volunteer.style.backgroundColor = "#31b0d5";
    volunteer.style.color = "white";
}

// Green button

const greenButton = document.querySelector("#greenBtn");
greenButton.addEventListener("click", putStuff);

function putStuff () {
    jumbotron.style.backgroundColor = "#87ca8a";
    donateBike.style.backgroundColor = "black";
    volunteer.style.backgroundColor = "#8c9c08";
}

// Part 2
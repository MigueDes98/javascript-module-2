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
const submitButton = document.querySelector("form button")
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const emailInput = document.querySelector("#exampleInputEmail1")
    const email = emailInput.value
    const isEmailValid = email.length > 0 && email.includes("@")
    if (isEmailValid === false) {
        emailInput.style.backgroundColor = "red"
    }
    const nameInput = document.querySelector("#example-text-input")
    const name = nameInput.value
    const isNameValid = name.length > 0
    if (isNameValid === false) {
        nameInput.style.backgroundColor = "red"
    } 
    const personalDescriptionInput = document.querySelector("#exampleTextarea")
    const personalDescription = personalDescriptionInput.value
    const isPersonalDescriptionValid = personalDescription.length > 0
    if (isPersonalDescriptionValid === false) {
        personalDescriptionInput.style.backgroundColor = "red"
    }
    const isEverythingValid = isEmailValid && isNameValid && isPersonalDescriptionValid
    if (isEverythingValid) {
        window.alert("thank you for filling out the form")
        emailInput.value=""
        nameInput.value=""
        personalDescriptionInput.value=""
    }
})


/*const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener("click", formFields(event));

function formFields(event){
    event.preventDefault()
    const email = document.querySelector("#exampleInputEmail1");
    const yourName = document.querySelector("#example-text-input");
    const description = document.querySelector("#exampleTextarea");
    
    const validation = function validate(){
    if (email.length.value > 0 && yourName.length.value > 0 && description.length.value > 0) {
        email.isValid(); yourName.isValid(); description.isValid();
    }}

    if (validation === true && email.imcludes("@")){
    email.value = "";
    yourName.value = "";
    description.value = "";
    alert("Thank you for filling out the form!!!");
    }
    
    else {
        email.style.backgroundColor = "red";
        yourName.style.backgroundColor = "red";
        description.style.backgroundColor = "red";
    }
}*/

let form = document.querySelector("form");
form.addEventListener("submit", checkUserInput);
let emailArea = document.querySelector("#exampleInputEmail1");
let nameArea = document.querySelector("#example-text-input");
let textArea = document.querySelector("#exampleTextarea");
emailArea.addEventListener("change", changeBackground);
nameArea.addEventListener("change", changeBackground);
textArea.addEventListener("change", changeBackground);
function changeBackground(event) {
    event.target.classList.remove("redBackground");
    event.target.classList.add("whiteBackground");
}
function checkUserInput(event) {
    event.preventDefault();
    let isEmailAreaValid = emailArea.value.trim().includes("@");
    let isNameAreaValid = nameArea.value.trim().length > 0;
    let isTextAreaValid = textArea.value.trim().length > 0;
    if (isEmailAreaValid && isNameAreaValid && isTextAreaValid) {
        emailArea.value = "";
        nameArea.value = "";
        textArea.value = "";
        emailArea.classList.remove("redBackground");
        emailArea.classList.add("whiteBackground");
        nameArea.classList.remove("redBackground");
        nameArea.classList.add("whiteBackground");
        textArea.classList.remove("redBackground");
        textArea.classList.add("whiteBackground");
        alert("Thank you for filling out the form");
    } else {
        if (!isEmailAreaValid) {
            emailArea.classList.remove("whiteBackground");
            emailArea.classList.add("redBackground");
        }
        if (!isNameAreaValid) {
            nameArea.classList.remove("whiteBackground");
            nameArea.classList.add("redBackground");
        }
        if (!isTextAreaValid) {
            textArea.classList.remove("whiteBackground");
            textArea.classList.add("redBackground");
        }
    }
}
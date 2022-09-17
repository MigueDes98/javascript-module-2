/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
1
const pElements = document.querySelectorAll("p");
console.log(pElements);
2
const div = document.querySelectorAll("div");
console.log(div);
3
const id = document.querySelector("#jumbotron-text");
console.log(id);
4
const elements = document.querySelector(".primary-content").querySelectorAll("p");
console.log(elements);
/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

const button = document.querySelector("#alertBtn");
button.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
/*
const button2 = document.querySelector("#bgrChangeBtn");
button2.addEventListener("click", changeColor);

function changeColor() {
    return document.body.style.backgroundColor = "blue";
}

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const button3 = document.querySelector("#addTextBtn");
button3.addEventListener("click", addP);

function addP() {
    let newP = document.createElement("p")
    let learn = document.querySelector("#mainArticles")
    learn.appendChild(newP)
    newP.innerText ="Hello world"
}
/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const button4 = document.querySelector("#largerLinksBtn");
button4.addEventListener("click", increase);

function increase() {
    const links = document.querySelectorAll("a")
    links.forEach(largeText => largeText.style.fontSize = "x-large");
}


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const button6 = document.querySelector("#addArticleBtn");
button6.addEventListener("click", addP6);

function addP6() {
    const input = document.querySelector("#addArticleInput")
    const text = input.value

    let newP = document.createElement("p")
    newP.textContent=text
    let learn = document.querySelector("#mainArticles")
    learn.appendChild(newP)

    input.value=""
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

const colors= ["yellow", "red", "green", "blue"]
const button2 = document.querySelector("#bgrChangeBtn");
let i = 0
button2.addEventListener("click", changeColor);

function changeColor() {
    document.body.style.backgroundColor = colors[i]
     if (i < colors.length - 1) {
        i++;
    } else {
        i = 0;
    }
}

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
let elementsP = document.querySelectorAll("p");
let elementsSix = elementsP.length === 6;
console.log(elementsSix);

let firstElementDiv = document.querySelector("div.site-header");
console.log(firstElementDiv);

let firstElemntId = document.querySelector("#jumbotron-text");
console.log(firstElemntId);

let elementsP2 = document.querySelectorAll("primary-content p");
console.log(elementsP2.length==3);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/

let buttonAlert = document.querySelector("#alertBtn");
buttonAlert.addEventListener("click", thanksMessage);
function thanksMessage(){
    alert("Thanks for visiting Bikes for Refugees!");
}


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

/*let buttonChangeColor = document.querySelector("#bgrChangeBtn");
buttonChangeColor.addEventListener("click", changeColorPage);
function changeColorPage() {
    document.body.style.backgroundColor="blue";
}*/

/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/

let addSomeText = document.querySelector("#addTextBtn");
addSomeText.addEventListener("click", writeSomeText);
function writeSomeText() {
    var writeP = document.createElement("P");
    writeP.innerHTML = "This is a new paragraph.";
    document.getElementById("mainArticles").appendChild(writeP);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

const buttonLinks = document.querySelector("#largerLinksBtn"); 
buttonLinks.addEventListener ("click", function (){ 
    let elementsLinks = Array.from(document.querySelectorAll('a[href*="#"]')); 
        
    elementsLinks.forEach ((eachElement) => { 
        eachElement.style.fontSize = 25;
    });
})


/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

let addButton = document.querySelector('#addArticleBtn').addEventListener('click', (e) => {
    const inputText = document.querySelector('.addArticle').value;
    let text1 = inputText.trim()
    addParagraph(text1)
})

function addParagraph(text){
    const pContainer = document.querySelector("#mainArticles")
    const article = document.createElement("article")
    article.classList.add("article")
    const para = document.createElement('p')
    para.classList.add("article-lead")
    para.textContent = text
    article.appendChild(para)
    pContainer.appendChild(article)
    document.querySelector('.addArticle').value = '';
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

/*comento el ejercicio 3 */

let chgBtnColor = document.getElementById('bgrChangeBtn');

chgBtnColor.addEventListener("click", event => { 
     changeColor(event);
 });

function changeColor(event) {
    let arrColors = ["blue", "red", "green", "gray", "brown"]; 
    event.preventDefault();
    const body = document.querySelector('body');
    const bodycolor = body.style.backgroundColor;
    let colorIndex = arrColors.indexOf(bodycolor); 
    if (colorIndex === -1 || (colorIndex === arrColors.length - 1)){
        body.style.backgroundColor = arrColors[0];
    }else{
        body.style.backgroundColor = arrColors[colorIndex + 1]
    }
}
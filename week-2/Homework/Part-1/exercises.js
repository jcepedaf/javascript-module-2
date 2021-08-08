/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */
function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");


for(let i=0; i < arrayOfPeople.length; i++){
  let h1Elem = document.createElement("h1");
  h1Elem.textContent = arrayOfPeople[i].name;
  content.appendChild(h1Elem);

  let h2Elem = document.createElement("h2");
  h2Elem.textContent = arrayOfPeople[i].job;
  content.appendChild(h2Elem);
}

}



/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  const content = document.querySelector("#content");
  let ulElem = document.createElement("ul");
  content.appendChild(ulElem);

  for (let i=0; i < shopping.length; i++){
    let listElem = document.createElement("li");
    listElem.innerHTML = shopping[i];
    ulElem.appendChild(listElem);
  }

}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];

    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/
function exerciseThree(books) {
  //Write your code in here
  const booklist = document.createElement("ul");
 
  books.forEach( book => { 
    const bookItem = document.createElement("li");
    const bookDetails = document.createElement("p");
    const bookImg = document.createElement("img");
    bookDetails.textContent = `${book.title} - ${book.author}`;
    bookImg.setAttribute("src",book.imagesBooks);
    bookImg.style.width = "200px";

    
    
    bookItem.appendChild(bookDetails);
    booklist.appendChild(bookItem);
    bookItem.appendChild(bookImg)
    
    
  });

  document.body.appendChild(booklist);

}

//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    imagesBooks: "https://media.shortform.com/covers/png/the-design-of-everyday-things-cover@8x.png",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    imagesBooks: "https://images-na.ssl-images-amazon.com/images/I/41Z56GwEv9L._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    imagesBooks: "https://m.media-amazon.com/images/S/aplus-media/vc/fb71c565-0ec5-44b3-81e1-848bbcccb96f._CR0,5,516,516_PT0_SX300__.jpg"
  }
];

exerciseThree(books);

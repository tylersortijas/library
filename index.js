// Array to hold the books
let myLibrary = [];

console.log(myLibrary);

// DOM Manipulation
const content = document.querySelector(".content");

const addBookButton = document.querySelector("button");
const cancelButton = document.querySelector("#cancel");
const submitButton = document.querySelector("#submit");

const form = document.querySelector("form");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let readInput = document.querySelector("#read");

// Class refactorization over use of a plain constructor previously
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  
}

// // Constructor for each book
// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

// Prototype to toggle read/!read
// Use case is when you already have 1k books and want to implement a new attr to object you 
// don't have to go back and add to every single book prior to this new feature. 
// Prototype does allows it to be used universally past or present books.
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  displayBook();
}

// Add a book to library
const addBookToLibrary = () => {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = readInput.value;
  let newBook = new Book(title, author, pages, read);
  console.log(newBook);

  myLibrary.push(newBook);
  console.log(myLibrary);
  
  displayBook();
};

// Displays the newest book and initial books in Library
const displayBook = () => {
  content.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.classList.add("card");
    bookEl.innerHTML = `
    <div>
    <h3>${book.title}</h3>
    <h5>by ${book.author}</h5>
    <p>${book.pages} pages</p>
    <p>${book.read ? "Read" : "Not Read Yet"}</p>
    <button onclick="removeBook(${i})">Remove</button>
    <button onclick="toggleRead(${i})">Read</button>
    </div>`;
    content.appendChild(bookEl);
  }
};

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBook();
}

// Form pop-up to add new Book
const openForm = () => {
  document.querySelector(".inputs").style.display = "block";
};

// Function to close pop-up
const closeForm = () => {
  document.querySelector(".inputs").style.display = "none";
};

// Book button to add book
addBookButton.addEventListener("click", () => {
  openForm();
});

// Submit button to push book to Library
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
});

// Button to close Form pop-up
cancelButton.addEventListener("click", () => {
  closeForm();
});

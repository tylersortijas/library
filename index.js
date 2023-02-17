// Array to hold the books
let myLibrary = [
  {
    title: "The Lord of the Rings",
    id: 1,
    author: "J. R. R. Tolkien",
    pages: "479",
    read: "not read yet",
  },
];

console.log(myLibrary);

// DOM Manipulation
const content = document.querySelector(".content");

const addBookButton = document.querySelector("button");
const cancelButton = document.querySelector("#cancel");
const submitButton = document.querySelector("#submit");
const removeButton = document.createElement("button");

const form = document.querySelector("form");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");
let pagesInput = document.querySelector("#pages");
let readInput = document.querySelector("#read");

// Constructor for each book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Add a book to library
const addBookToLibrary = () => {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = pagesInput.value;
  let read = readInput.value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  displayNewBook();
  // Adds Id to any new book added
  myLibrary.forEach((book, i) => {
    book.id = i + 1;
  });
};

// Displays the newest book in Library
const displayNewBook = () => {
  for (let i = myLibrary.length - 1; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    book.classList.add("card");
    content.appendChild(book);

    let title = document.createElement("h4");
    title.textContent = `${myLibrary[i].title}`;
    book.appendChild(title);
    let author = document.createElement("h5");
    author.textContent = `${myLibrary[i].author}`;
    book.appendChild(author);
    let pages = document.createElement("p");
    pages.textContent = `${myLibrary[i].pages}`;
    book.appendChild(pages);
    let read = document.createElement("p");
    read.textContent = `${myLibrary[i].read}`;
    book.appendChild(read);
    removeButton.textContent = "Remove";
    book.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      arrayIndex = myLibrary.findIndex((x) => x.title === this.title);
      myLibrary.splice(arrayIndex, 1);
      book.parentNode.removeChild(book);
    });
  }
};

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
  addBookToLibrary();
  e.preventDefault();
});

// Button to close Form pop-up
cancelButton.addEventListener("click", () => {
  closeForm();
});

// Remove book from library button
// removeButton.addEventListener("click", () => {
//   arrayIndex = myLibrary.findIndex((x) => x.title === this.title);
//   myLibrary.splice(arrayIndex, 1);
// });

// Display library array
const initialDisplayLibrary = () => {
  for (let i = 0; i < myLibrary.length; i++) {
    let book = document.createElement("div");
    book.classList.add("card");
    content.appendChild(book);

    let title = document.createElement("h4");
    title.textContent = `${myLibrary[i].title}`;
    book.appendChild(title);
    let author = document.createElement("h5");
    author.textContent = `${myLibrary[i].author}`;
    book.appendChild(author);
    let pages = document.createElement("p");
    pages.textContent = `${myLibrary[i].pages}`;
    book.appendChild(pages);
    let read = document.createElement("p");
    read.textContent = `${myLibrary[i].read}`;
    book.appendChild(read);
    removeButton.textContent = "Remove";
    book.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      arrayIndex = myLibrary.findIndex((x) => x.title === this.title);
      myLibrary.splice(arrayIndex, 1);
      book.parentNode.removeChild(book);
    });
  }
};

initialDisplayLibrary();

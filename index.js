// Array to hold the books
let myLibrary = [];

// Constructor for each book
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read}`;
  };
}

// Starting books in the library
myLibrary.push("The Hobbit", "J. R. R. Tolkien", "295", "not read yet");
myLibrary.push("The Lord of the Rings", "J. R. R. Tolkien", "479", "not read yet");
myLibrary.push("The Adventures of Captain Underpants", "Dav Pilkey", "125", "read");

// DOM Manipulation

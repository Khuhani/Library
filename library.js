//All books stored in an array
const myLibrary = [];

//Constructor for creating books
function Book(title,author,pages,status) {
    let id = crypto.randomUUID();

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = id;
};

document.querySelector('form').addEventListener('submit', e=>
{e.preventDefault()

//Create a new book/pick input from form
const title = document.querySelector('#title').value;
const author = document.querySelector('#author').value;
const pages = document.querySelector('#pages').value;
const readStatus = document.querySelector('#read').value;

const book = new Book(title,author,pages,readStatus);

//Add new book to library
addBookToLibrary(book);
});

function addBookToLibrary(book) {
    myLibrary.push(book);
};


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

    //After pushing books to the library
    displayBooks();
    clearFields();
};

function displayBooks() {
    myLibrary.forEach(book => {
        createCard(book)
    });
};

function clearFields() {
    document.querySelector('#title').value = ' ';
    document.querySelector('#author').value = ' ';
    document.querySelector('#pages').value = ' ';
}

function createCard(book) {
    const card = document.querySelector('.card');
    const cardContent = document.createElement('div');

    if (book.status == 'Read') {
        cardContent.textContent = `
        ${book.title}
        ${book.author}
        ${book.pages}
        Read
        ${book.id}`
    } else {
        cardContent.textContent = `
        ${book.title}
        ${book.author}
        ${book.pages}
        Not Read
        ${book.id}`
    }

    card.appendChild(cardContent);
} 

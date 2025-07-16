//All books stored in an array
let myLibrary = [];

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
const id = crypto.randomUUID();

const book = new Book(title,author,pages,readStatus,id);

//Add new book to library
addBookToLibrary(book);
});

function addBookToLibrary(book) {
    myLibrary.push(book);

    //After pushing books to the library
    //displayBooks();
    createCard();
    clearFields();
};

/*function displayBooks() {
    myLibrary.forEach(book => {
        createCard(book)
    });
};*/

function clearFields() {
    document.querySelector('#title').value = ' ';
    document.querySelector('#author').value = ' ';
    document.querySelector('#pages').value = ' ';
}

const libSection = document.querySelector('.lib-section');

function createCard(book) {
    /*const card = document.querySelector('.card');
    const cardContent = document.createElement('div');*/
    myLibrary.forEach (book => {
    const cardContent = document.createElement('div');
    cardContent.classList.add('card');
    cardContent.setAttribute('data-id', book.id);

    if (book.status == 'Read') {
        cardContent.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong>${book.author}</p>
        <p><strong>Pages:</strong>${book.pages}</p>
        <p><strong>Status:</strong>${book.status}</p>
        <p><strong>ID:</strong>${book.id}</p>
        <button class='delete-btn' onclick="deleteBook('${book.id}')">Delete</button>
        `
    } else {
        cardContent.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong>${book.author}</p>
        <p><strong>Pages:</strong>${book.pages}</p>
        <p><strong>Status:</strong>${book.status}</p>
        <p><strong>ID:</strong>${book.id}</p>
        <button class='.delete-btn' onclick="deleteBook('${book.id}')">Delete</button>
        `
    }

    libSection.appendChild(cardContent);
});
} 

//Deletes Books
function deleteBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    createCard();
}
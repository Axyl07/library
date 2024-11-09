console.log("This is a simple library project");



const myLibrary = ['hobbit', 'harry', 'gwen'];


function book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// const sampleBook = new book('opm', 'murata', '250');
// addToLibrary(sampleBook);

function addToLibrary(theBook) {
    myLibrary.push(theBook);
}



const input = document.querySelector('input');
const add = document.querySelector('#addBook');
add.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const createdBook = new book(title.value, author.value, pages.value);
    addToLibrary(createdBook);
    dialog.close();
})


const dialog = document.querySelector("dialog");
const open = document.querySelector(".openForm");
open.addEventListener('click', () => {
    dialog.show();
})


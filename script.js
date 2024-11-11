console.log("This is a simple library project");



// const myLibrary = ['hobbit', 'harry', 'gwen'];
const myLibrary = [];


function book(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// book.prototype.togglestatus = function () {
//     const hasRead = false;
//     if(readButton.is)

// }
// const sampleBook = new book('opm', 'murata', '250');
// addToLibrary(sampleBook);

function addToLibrary(theBook) {
    myLibrary.push(theBook);
}



const input = document.querySelector('input');
const add = document.querySelector('#addBook');
add.addEventListener('click', (event) => {
    // event.preventDefault();
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    if (title.value === '' || author.value === '' || pages.value === '') {
        // alert('Please fill the fields');
    } else {
        const createdBook = new book(title.value, author.value, pages.value);
        addToLibrary(createdBook);
        displayBooks(myLibrary);
        // dialog.close();
    }
})


const dialog = document.querySelector("dialog");
const open = document.querySelector(".openForm");
open.addEventListener('click', () => {
    dialog.show();
})

const cardContainer = document.querySelector('.cardContainer');

// const cardContainer = document.createElement('div');
cardContainer.style.display = 'flex';
cardContainer.style.flexWrap = 'wrap'
cardContainer.style.maxWidth = '100vw';
function displayBooks(myLibrary) {
    const card = document.createElement('div');
    card.className = 'card';
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pageDiv = document.createElement('div');
    const readStatus = document.createElement('div');
    readStatus.textContent = 'Not Read';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Book';
    deleteButton.addEventListener('click', () => {
        cardContainer.removeChild(card);
    })

   
    const readButton = document.createElement('button');
    readButton.textContent = "Read?";
    let status = false;
    if (!status) {
        readButton.addEventListener('click', () => {
            status = true;
            readStatus.textContent = "Read";
            readButton.textContent = "Not Read"
        })
    } else {
        readButton.addEventListener('click', () => {
            // status = false;
            readStatus.textContent = "Not Read";
            readButton.textContent = "Read"
        })
    }


    for (let index = 0; index < myLibrary.length; index++) {
        const bookObjects = myLibrary[index];
        titleDiv.textContent = 'Title :'+bookObjects.title;
        authorDiv.textContent = 'Author :'+bookObjects.author;
        pageDiv.textContent = 'Number of Pages :'+bookObjects.pages;
    }
    card.appendChild(titleDiv);
    card.appendChild(authorDiv);
    card.appendChild(pageDiv);
    card.appendChild(deleteButton);
    card.appendChild(readButton);
    card.appendChild(readStatus);
    cardContainer.appendChild(card);
}

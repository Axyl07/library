console.log("This is a simple library project");


// function book(title, author, pages) {
    //   this.title = title;
    //   this.author = author;
    //   this.pages = pages;
    // }
    
    const myLibrary = [];
    class bookC {
        
        constructor(title, author, pages) {
            this.title = title;
            this.author = author;
            this.pages = pages;
        }

    static addToLibrary(theGivenBook) {
    myLibrary.push(theGivenBook);
  }
  static displayBooks(myLibrary) {
    const card = document.createElement("div");
    card.className = "card";
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pageDiv = document.createElement("div");
    const readStatus = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.id = "delete";
    deleteButton.textContent = "Delete Book";
    deleteButton.addEventListener("click", () => {
      cardContainer.removeChild(card);
    });
  
    const readButton = document.createElement("button");
    readButton.textContent = "Not Read";
    readStatus.textContent = "Current Status : Not read";
    readButton.style.backgroundColor = "Red";
    readButton.style.boxShadow = "1px 1px 25px red";
  
    function flipReadStatus() {
      readButton.textContent = "Read";
      readStatus.textContent = "Current Status : Read";
    }
    function flipbackReadStatus() {
      readButton.textContent = "Not Read";
      readStatus.textContent = "Current Status : Not read";
    }
  
    readButton.addEventListener("click", () => {
      if (readButton.textContent === "Not Read") {
        flipReadStatus();
        readButton.style.backgroundColor = "limegreen";
        readButton.style.boxShadow = "1px 1px 25px limegreen";
      } else {
        flipbackReadStatus();
        readButton.style.backgroundColor = "Red";
        readButton.style.boxShadow = "1px 1px 25px red";
      }
    });
  
    for (let index = 0; index < myLibrary.length; index++) {
      const bookObjects = myLibrary[index];
      titleDiv.textContent = "Title :" + bookObjects.title;
      authorDiv.textContent = "Author :" + bookObjects.author;
      pageDiv.textContent = "Number of Pages :" + bookObjects.pages;
    }
    card.appendChild(titleDiv);
    card.appendChild(authorDiv);
    card.appendChild(pageDiv);
    card.appendChild(readButton);
    card.appendChild(readStatus);
    card.appendChild(deleteButton);
    cardContainer.appendChild(card);
  }
    
}

// function addToLibrary(theBook) {
//   myLibrary.push(theBook);
// }

const dialog = document.querySelector("dialog");
const open = document.querySelector(".openForm");
const input = document.querySelector("input");
const add = document.querySelector("#addBook");
const cardContainer = document.querySelector(".cardContainer");
open.addEventListener("click", () => {
  dialog.show();
});

add.addEventListener("click", () => {
  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  if (title.value === "" || author.value === "" || pages.value === "") {
  } else {
    const createdBook = new bookC(title.value, author.value, pages.value);
    bookC.addToLibrary(createdBook);
    bookC.displayBooks(myLibrary);
    title.value = "";
    author.value = "";
    pages.value = "";
    dialog.close();
  }
});


// function displayBooks(myLibrary) {
//   const card = document.createElement("div");
//   card.className = "card";
//   const titleDiv = document.createElement("div");
//   const authorDiv = document.createElement("div");
//   const pageDiv = document.createElement("div");
//   const readStatus = document.createElement("div");
//   const deleteButton = document.createElement("button");
//   deleteButton.id = "delete";
//   deleteButton.textContent = "Delete Book";
//   deleteButton.addEventListener("click", () => {
//     cardContainer.removeChild(card);
//   });

//   const readButton = document.createElement("button");
//   readButton.textContent = "Not Read";
//   readStatus.textContent = "Current Status : Not read";
//   readButton.style.backgroundColor = "Red";
//   readButton.style.boxShadow = "1px 1px 25px red";

//   function flipReadStatus() {
//     readButton.textContent = "Read";
//     readStatus.textContent = "Current Status : Read";
//   }
//   function flipbackReadStatus() {
//     readButton.textContent = "Not Read";
//     readStatus.textContent = "Current Status : Not read";
//   }

//   readButton.addEventListener("click", () => {
//     if (readButton.textContent === "Not Read") {
//       flipReadStatus();
//       readButton.style.backgroundColor = "limegreen";
//       readButton.style.boxShadow = "1px 1px 25px limegreen";
//     } else {
//       flipbackReadStatus();
//       readButton.style.backgroundColor = "Red";
//       readButton.style.boxShadow = "1px 1px 25px red";
//     }
//   });

//   for (let index = 0; index < myLibrary.length; index++) {
//     const bookObjects = myLibrary[index];
//     titleDiv.textContent = "Title :" + bookObjects.title;
//     authorDiv.textContent = "Author :" + bookObjects.author;
//     pageDiv.textContent = "Number of Pages :" + bookObjects.pages;
//   }
//   card.appendChild(titleDiv);
//   card.appendChild(authorDiv);
//   card.appendChild(pageDiv);
//   card.appendChild(readButton);
//   card.appendChild(readStatus);
//   card.appendChild(deleteButton);
//   cardContainer.appendChild(card);
// }

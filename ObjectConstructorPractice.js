class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        pages = '0',
        isRead = false
    ) {
        this.title = title
        this.author = author
        this.pages = pages
        this.isRead = isRead
    }
}

let myLibrary = [];

const theHobbit = new Book("The Hobbit", "J.R.R Tolkein", 310, true);
myLibrary.push(theHobbit);

function addBookToLibrary(title, author, pages, isRead) {
    const book = new Book(title, author, pages, isRead);
    myLibrary.push(book);
    booksInLibrary();
}

function validateform(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const pagesInput = document.querySelector('#pages');
    const readcheckbox = document.querySelector('input[name="checkbox"]');

    if (readcheckbox.checked) {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, true);
        console.log(54);
    } else {
        addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
    }
    form.reset();
} 

function booksInLibrary() {
    const listBooks = document.querySelector('.library');
    listBooks.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        listBooks.appendChild(bookCard);

        const bookTitle = document.createElement('div');
        bookTitle.classList.add('bT');
        bookTitle.textContent = myLibrary[i].title;
        bookCard.appendChild(bookTitle);

        const bookAuthor = document.createElement('div');
        bookAuthor.classList.add('bA');
        bookAuthor.textContent = myLibrary[i].author;
        bookCard.appendChild(bookAuthor);

        const bookPages = document.createElement('div');
        bookPages.classList.add('bP');
        bookPages.textContent = myLibrary[i].pages + ' pages';
        bookCard.appendChild(bookPages);

        const readAndTrash = document.createElement('div');
        readAndTrash.classList.add('readAndTrash')
        const bookReadStatus = document.createElement('div');
        bookReadStatus.classList.add('bR');
        if (myLibrary[i].isRead === true) {
            bookReadStatus.classList.add('bookRead');
        } else {
            bookReadStatus.classList.add('notRead');
        }
        bookCard.appendChild(readAndTrash);
        readAndTrash.appendChild(bookReadStatus)

        // To toggle Read and not read status
        bookReadStatus.addEventListener('click', () =>  myLibrary[i].isRead = !myLibrary[i].isRead )

        //Remove Book button creation and function
        const removeBook = document.createElement('div');
        removeBook.classList.add('trash');
        readAndTrash.appendChild(removeBook);
        removeBook.addEventListener('click', () => myLibrary.splice(i, 1) )
    }
}

function check() {
    document.getElementById("is-read").checked = true
}



function listenClicks() {
    document.addEventListener('click', (event)=> {
        const {target} = event;
        if (target.id === 'bookButton') {
            validateform(event);
        } 
     booksInLibrary();
    })
}

listenClicks();
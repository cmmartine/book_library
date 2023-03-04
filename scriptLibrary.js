let myLibrary = [ {title: 'Harry and the Not So Secret Chamber', author: 'JK', pages: '560', readStatus: 'Not Read'}, {title: 'The Storm Before the Storm: The Beginning of the End of the Roman Republic', author: 'Mike Duncan', pages: '352', readStatus: 'Read'}, {title: 'A Common-Sense Guide to Data Structures and Algorithms, Second Edition: Level Up Your Core Programming Skills', author: 'Jay Wengrow', pages: '507', readStatus: 'In Progress'} ];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = 'Not Read'
}

const bookContainer = document.getElementById('book-container');
const submitBtn = document.getElementById('submit');
const bookShowBtn = document.getElementById('show');
const bookHideBtn = document.getElementById('hide');
const bookForm = document.getElementById('book-form');
let removeBookBtns; /* Query Selector filled upon displaying initial books and each time a new book is inserted */
bookShowBtn.addEventListener('click', showNewBookForm);
bookHideBtn.addEventListener('click', hideNewBookForm);
submitBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(e) {
  e.preventDefault();
  let titleInput = document.getElementById('title').value;
  let authorInput = document.getElementById('author').value;
  let pagesInput = document.getElementById('pages').value;
  let newBook = new Book( titleInput, authorInput, pagesInput );
  myLibrary.push(newBook);
  document.getElementById('book-form').reset();
  insertBookHTML(newBook, myLibrary.length - 1);
}

function insertBookHTML(book, index) {
  let bookCard = document.createElement('div');
  bookCard.dataset.index = index;
  bookCard.classList.add('book-card');
  let title = document.createTextNode(`Title: ${book.title}\n\n`);
  let author = document.createTextNode(`Author: ${book.author}\n\n`);
  let pages = document.createTextNode(`Pages: ${book.pages}\n\n`) ;
  let status = document.createTextNode(`Status: ${book.readStatus} \n\n`);
  const button = document.createElement('button');
  button.innerText = 'Remove Book';
  button.className = 'remove-book';
  button.dataset.index = index; 
  bookCard.append(title, author, pages, status, button);
  bookContainer.appendChild(bookCard);
  removeBookBtns = document.querySelectorAll('.remove-book');
  assignRemoveBookButtons()
}

function displayBooks() {
  let i = 0;
  myLibrary.forEach((book) => {
    insertBookHTML(book, i);
    i += 1;
  });
  removeBookBtns = document.querySelectorAll('.remove-book');
  assignRemoveBookButtons()
}

function showNewBookForm(e) {
  bookForm.classList.remove('toggle-visibility');
  bookShowBtn.classList.add('toggle-visibility');
  bookHideBtn.classList.remove('toggle-visibility');
}

function hideNewBookForm(e) {
  bookForm.classList.add('toggle-visibility');
  bookShowBtn.classList.remove('toggle-visibility');
  bookHideBtn.classList.add('toggle-visibility');
}

function assignRemoveBookButtons() {
  removeBookBtns.forEach((currentBtn) => {
    currentBtn.addEventListener('click', removeBook);
  });
 }

function removeBook(e) {
  let bookCards = document.querySelectorAll('.book-card');
  myLibrary.splice(e.target.dataset.index, 1);
  bookCards.forEach((book) => {
    if (book.dataset.index === e.target.dataset.index) {
      book.remove();
    };
  });
}

displayBooks();
let myLibrary = [ {title: 'Harry and the Not So Secret Chamber', author: 'JK', pages: '560', readStatus: 'Not Read'}, {title: 'The Storm Before the Storm: The Beginning of the End of the Roman Republic', author: 'Mike Duncan', pages: '352', readStatus: 'Read'}, {title: 'A Common-Sense Guide to Data Structures and Algorithms, Second Edition: Level Up Your Core Programming Skills', author: 'Jay Wengrow', pages: '507', readStatus: 'In Progress'} ];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = 'Not Read'
}

const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', addBookToLibrary);

function addBookToLibrary(e) {
  e.preventDefault();
  let titleInput = document.getElementById('title').value;
  let authorInput = document.getElementById('author').value;
  let pagesInput = document.getElementById('pages').value;
  let newBook = new Book( titleInput, authorInput, pagesInput );
  myLibrary.push(newBook);
  document.getElementById('book-form').reset();
  insertBookHTML(newBook);
}

const bookContainer = document.getElementById('book-container');

function insertBookHTML(book) {
  let bookCard = document.createElement('p');
  bookCard.classList.add('book-card');
  let title = document.createTextNode(`Title: ${book.title}\n\n`);
  let author = document.createTextNode(`Author: ${book.author}\n\n`);
  let pages = document.createTextNode(`Pages: ${book.pages}\n\n`) ;
  let status = document.createTextNode(`Status: ${book.readStatus}`);
  bookCard.append(title, author, pages, status);
  bookContainer.appendChild(bookCard);
}

function displayBooks() {
  myLibrary.forEach((book) => {
    insertBookHTML(book);
  });
}

displayBooks();
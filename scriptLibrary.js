let myLibrary = [ ];

function Book(title, author, pages) {
  this.title = title
  this.author = author
  this.pages = pages
  this.readStatus = false
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
  document.getElementById('bookForm').reset();
}

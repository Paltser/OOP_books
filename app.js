const ui = new UI()
const ls = new LS()

const subbtn = document.getElementById('subbtn')
subbtn.addEventListener("click", addBook)

document.addEventListener("DOMContentLoaded", getBooks)

const bookList = document.querySelector('#book-list')
bookList.addEventListener('click', delBook)

function addBook(event){
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value

    const book = new Book(title,author,isbn)
    ui.addBook(book)
    ls.addBook(book)

    ui.title.value = ''
    ui.author.value = ''
    ui.isbn.value = ''
    event.preventDefault()
}
function getBooks(){
    // get data from LS
    const books = ls.getData('books')
    // for each book in books
    books.forEach(function (booksFromLS){
        ui.addBook(booksFromLS)
    })
}
function delBook(event){
    if (event.target.textContent === 'X') {
        const book = ui.getBook(event.target)
        if (ui.delBook(event.target)=== true){
            ls.delBook(book)
        }
    }
}
const ui = new UI()
const ls = new LS()

const subbtn = document.getElementById('subbtn')
subbtn.addEventListener("click", addBook)

function addBook(event){
    const title = ui.title.value
    const author = ui.author.value
    const isbn = ui.isbn.value

    const book = new Book(title,author,isbn)
    ui.addBook(book)
    ls.addBook(book)
    console.log(book)

    ui.title.value = ''
    ui.author.value = ''
    ui.isbn.value = ''
    event.preventDefault()
}
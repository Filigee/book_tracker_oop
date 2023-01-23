// Event Listeners
document.getElementById("submit").addEventListener("click", () => {
    const book = new Book(document.getElementById("title").value, document.getElementById("author").value)

    book.addBook(book.title)
})

class UI{
    constructor(){
        this.tableTitle = document.getElementById("title__container")
    }

    addBook = (title) => {
        let h3 = document.createElement("h3")
        h3.innerText = title
        this.tableTitle.appendChild(h3)
    }
}

class Book extends UI{
    constructor(title, author){
        super()
        this.title = title
        this.author = author
    }

    getTitle = () => {
        return this.title
    }
}
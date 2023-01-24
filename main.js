// Event Listeners
document.getElementById("submit").addEventListener("click", () => {
    const book = new Book(document.getElementById("title").value, document.getElementById("author").value)
    book.addBook(book.getTitle(), book.getAuthor())
})

class UI{
    constructor(){
        this.form_title = document.getElementById("title")
        this.form_author = document.getElementById("author")
        this.book_container = document.querySelector(".book__container")
    }

    createBook = (title, author) => {
        let container = document.createElement("div")
        container.classList.add("book__flex")

        container.innerHTML = 
        `<h3>${title}</h3>
        <h3>${author}</h3>
        <h3 id="remove">🗑️</h3>
        `

        return container
    }

    addBook = (title, author) => {
        if(this.form_title.value.trim() == "" || this.form_author.value.trim() == "")
            return alert("Please input a title and author")
        
            const book = this.createBook(title, author)
        this.book_container.appendChild(book)
        this.removeBook(book)
    }

    removeBook = (book) => {
        book.addEventListener("click", (e) => {
            if(e.target.id == "remove")
                e.target.parentElement.remove()
        })
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

    getAuthor = () => {
        return this.author
    }
}
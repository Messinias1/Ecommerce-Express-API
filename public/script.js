function handleSubmit() {
    const sellerName = document.getElementById("seller-name").value
    const book = document.getElementById("book").value
    const author = document.getElementById("author").value
    const price = document.getElementById("price").value
    const genre = document.getElementById("genre").value

    console.log(sellerName, book, author, price, genre)

    const payload = {
        sellername: sellerName,
        book,
        author,
        price,
        genre
    }
    axios.post('/api', payload)
        .then(response => {
            console.log(response)
        })
}

function displayAllInfo(data, id) {
    let header = document.getElementById('result').innerHTML = 
    "<tr>" 
    + "<th>" + "Seller Name " + "</th>"
    + "<th>" + "Book " + "</th>"
    + "<th>" + "Author " + "</th>"
    + "<th>" + "Price($USD) " + "</th>"
    + "<th>" + "Genre " + "</th>"
    + "</tr>"

    const listItems = data.map(element => {
        return ("<tr>" 
        + "<th>" + element.sellername + "</th>"
        + "<th>" + element.book + "</th>"
        + "<th>" + element.author + "</th>"
        + "<th>" + element.price + "</th>"
        + "<th>" + (element.genre ? element.genre : " " 
        + element.genre + " did not specify genre.") + "</th>"
        + "</tr>")
    })

    document.getElementById(id).innerHTML = "<table>" + header + listItems.join("\n") + "</table>"
}

function getAllInfo() {
    axios.get('/api/getallinfo') 
        .then(response => {
           displayAllInfo(response.data, "result")
        })
}
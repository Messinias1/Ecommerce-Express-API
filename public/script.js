
function handleSubmit() {
    const sellername = document.getElementById("seller-name").value
    const book = document.getElementById("book").value
    const author = document.getElementById("author").value
    const price = document.getElementById("price").value
    const genre = document.getElementById("genre").value

    console.log(sellerName, book, author, price, genre)

    const payload = {
        sellername,
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
    let header = document.getElementById('get-all-info').innerHTML = 
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
           displayAllInfo(response.data, "get-all-info")
        })
}

function titleSubmit() {
    console.log("clicked")
    const input = document.getElementById("title-input").value

    console.log(input)

    const url = '/api/gettitleresults?input=' + input

    axios.get(url)
        .then(response => {
            console.log(response)
            // console.log(response.data[0].book)

            if (response.data.length > 0) {
                const returnedTitle = response.data[0].book
                const price = response.data[0].price

                document.getElementById("title-search-results").innerHTML = "<table>" 
                +  "<tr>"
                + "<th>" + returnedTitle + "</th>" 
                + "<th>" + price + "</th>" 
                + "<th> <button onclick='purchase()' style='background-color: blue'>Buy</button> </th>"             
                + "</tr>" 
                + "</table>"
            } else {
                document.getElementById("title-search-results").innerHTML = "<h4> We're Sorry We Don't have that book :(</h4>"
            }
        })
}
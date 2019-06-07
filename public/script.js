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

function getAllInfo() {
    axios.get('/getallinfo') 
        .then(response => {
            document.getElementById('result').innerHTML = JSON.stringify(response.data)
        })
}
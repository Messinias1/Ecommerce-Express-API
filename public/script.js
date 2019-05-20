function handleSubmit() {
    const sellerName = document.getElementById("seller-name").value
    const product = document.getElementById("product").value
    const productId = document.getElementById("product-id").value
    const price = document.getElementById("price").value
    const description = document.getElementById("description").value

    console.log(sellerName, product, productId, price, description)

    const payload = {
        sellername: sellerName,
        product,
        productid: productId,
        price,
        description
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
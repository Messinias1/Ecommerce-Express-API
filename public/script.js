
function handleSubmit() {
    const sellername = document.getElementById("seller-name").value
    const book = document.getElementById("book").value
    const author = document.getElementById("author").value
    const price = document.getElementById("price").value
    const genre = document.getElementById("genre").value

    // console.log(sellername, book, author, price, genre)

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
    `<tr> 
    <th>Seller Name</th>
    <th>Book</th>
    <th>Author</th>
    <th>Price($USD)</th>
    <th>Genre</th>
     </tr>`

    const listItems = data.map(element => {
        return (`<tr> 
        <td>${element.sellername}</td>
        <td>${element.book}</td>
        <td>${element.author}</td>
        <td>$${element.price}</td>
        <td>${element.genre ? element.genre :  " did not specify genre."}</td>
        </tr>`)
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

    const url = '/api/gettitleresults/' + input

    axios.get(url)
        .then(response => {
            console.log(response)
            
            
            if (response.data.length > 0) {
                let titles = []
                document.getElementById("title-search-results").innerHTML = ''
                for (let i = 0; i < response.data.length; i++) {
                    titles.push([
    
                    document.getElementById("title-search-results").innerHTML += "<table>" 
                    +  "<tr>"
                    + "<td class='td-one'>" + response.data[i].book + "</td>" 
                    + "<td class='td-two'>" + "$" + response.data[i].price + "</td>" 
                    + "<td class='td-three'> <button onclick='purchase()' style='background-color: blue'>Purchase</button> </td>"          
                    + "</tr>" 
                    + "</table>"
                    ])
                }
            } else {
                         document.getElementById("title-search-results").innerHTML = "<h4> We're Sorry We Don't have that book :(</h4>"
                     }
         })
        }

function purchase() {
    console.log("clicked")
    alert("Thank You For Your Purchase!");
}

function handleSubmit() {
    const sellername = document.getElementById("seller-name").value
    const book = document.getElementById("book").value
    const author = document.getElementById("author").value
    const price = document.getElementById("price").value
    const genre = document.getElementById("genre").value

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
        <th>Title</th>
        <th>Author</th>
        <th>Price($USD)</th>
        <th>Genre</th>
    </tr>`

    const listItems = data.map(e => {
        return (`<tr> 
        <td>${e.sellername}</td>
        <td>${e.book}</td>
        <td>${e.author}</td>
        <td>$${e.price}<button onclick='purchase()' style='background-color: blue; margin: 10px'>Purchase</button</td>
        <td>${e.genre ? e.genre :  "No Genre Specified"}</td>
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
                    document.getElementById("title-search-results").innerHTML += 
                        `<table>
                    <tr>
                        <td class='td-one'>${response.data[i].book}</td>
                        <td class='td-two'>${response.data[i].author}</td> 
                        <td class='td-three'>$${response.data[i].price}</td>
                        <td class='td-four'><button onclick='purchase()' style='background-color: blue; margin: 10px'>Purchase</button></td>          
                    </tr> 
                        </table>`
                    ])
                }
            } else {
                document.getElementById("title-search-results").innerHTML = "<h4> We're Sorry We Don't have that book :(</h4>"
            }
         })
        }

function authorSubmit() {
    const input = document.getElementById("author-input").value
    console.log(input)

   const url = '/api/getauthorresults/' + input

   axios.get(url)
       .then(response => {
           console.log(response)
           if (response.data.length > 0) {

            let authors = []
            document.getElementById("author-search-results").innerHTML = ''

            for (let i = 0; i < response.data.length; i++) {
                authors.push([
                document.getElementById("author-search-results").innerHTML += 
                    `<table>
                <tr>
                    <td class='td-one'>${response.data[i].author}</td>
                    <td class='td-two'>${response.data[i].book}</td> 
                    <td class='td-three'>$${response.data[i].price}</td>
                    <td class='td-four'><button onclick='purchase()' style='background-color: blue; margin: 10px'>Purchase</button></td>          
                </tr> 
                    </table>`
                ])
            }
        } else {
            document.getElementById("author-search-results").innerHTML = "<h4>We're Sorry, We Don't Recognize That Author :(</h4>"
        }
    })
}

function genreSubmit() {
    const input = document.getElementById("genre-input").value
    console.log(input)

   const url = '/api/getgenreresults/' + input

   axios.get(url)
       .then(response => {
           console.log(response)
           if (response.data.length > 0) {

            let genres = []
            document.getElementById("genre-search-results").innerHTML = ''

            for (let i = 0; i < response.data.length; i++) {
                genres.push([
                document.getElementById("genre-search-results").innerHTML += 
                    `<table>
                <tr>
                    <td class='td-one'>${response.data[i].genre}</td>
                    <td class='td-two'>${response.data[i].book}</td>
                    <td class='td-three'>${response.data[i].author}</td> 
                    <td class='td-four'>$${response.data[i].price}</td>
                    <td class='td-five'><button onclick='purchase()' style='background-color: blue; margin: 10px'>Purchase</button></td>          
                </tr> 
                    </table>`
                ])
            }
        } else {
            document.getElementById("genre-search-results").innerHTML = "<h4>We're Sorry, We Don't Recognize That Author :(</h4>"
        }
    })
}

function priceSubmit() {
    const min = document.getElementById("price-input-min").value
    const max = document.getElementById("price-input-max").value
    console.log(min, max)

   const url = '/api/getgenreresults/' + min + max

   axios.get(url)
       .then(response => {
           console.log(min, max)
        //    if (response.data.length > 0) {

        //     let genres = []
        //     document.getElementById("genre-search-results").innerHTML = ''

        //     for (let i = 0; i < response.data.length; i++) {
        //         genres.push([
        //         document.getElementById("genre-search-results").innerHTML += 
        //             `<table>
        //         <tr>
        //             <td class='td-one'>${response.data[i].genre}</td>
        //             <td class='td-two'>${response.data[i].book}</td>
        //             <td class='td-three'>${response.data[i].author}</td> 
        //             <td class='td-four'>$${response.data[i].price}</td>
        //             <td class='td-five'><button onclick='purchase()' style='background-color: blue; margin: 10px'>Purchase</button></td>          
        //         </tr> 
        //             </table>`
        //         ])
        //     }
        // } else {
        //     document.getElementById("genre-search-results").innerHTML = "<h4>We're Sorry, We Don't Recognize That Author :(</h4>"
        // }
    })
}

function purchase() {
    console.log("clicked")
    alert("Thank You For Your Purchase!");
}
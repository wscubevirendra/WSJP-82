const http = require("http");
const url = require("url");

//http://localhost:5000/product?limit=2

//http://localhost:5000/--- Domain
// /product --path
//?limit=2  ---query
const user = [
    { name: 'Neha', email: 'neha75@yahoo.com' },
    { name: 'Yogesh', email: 'yogesh48@outlook.com' },
    { name: 'Ravi', email: 'ravi21@gmail.com' }
]

const product = [
    {
        id: 1,
        name: 'Gaming Keyboard',
        price: 58.23,
        category: 'Electronics',
        inStock: true
    },
    {
        id: 2,
        name: 'Phone Holder',
        price: 35.75,
        category: 'Mobile',
        inStock: false
    },
    {
        id: 3,
        name: 'Phone Holder',
        price: 35.75,
        category: 'Mobile',
        inStock: false
    },
    {
        id: 4,
        name: 'Phone Holder',
        price: 35.75,
        category: 'Mobile',
        inStock: false
    }, {
        id: 5,
        name: 'Phone Holder',
        price: 35.75,
        category: 'Mobile',
        inStock: false
    },
]


const categories = ["Electronics", "Accessories", "Gadgets", "Office", "Mobile"];
const server = http.createServer(
    (req, res) => {
        const parseUrl = url.parse(req.url, true)
        if (parseUrl.pathname == "/user") {
            res.end(JSON.stringify(user))

        } else if (parseUrl.pathname == "/product") {
            res.end(JSON.stringify(product))
        }else if(parseUrl.path==="/category"){
            res.end(JSON.stringify(categories))
        }else{
            res.end("Kuch nhi hai mere pas")
        }

    }
)

server.listen(
    5000,
    () => {
        console.log("Server Started")
    }
)
let express = require('express')
let router = express.Router()

let books = {
    1000: {title: "The Importance of Being Earnest", author: "Oscar Wilde", ipfsId: "QmaAGKsbWhTg3e7r3LmZKahhhva4eQf45TetsLm8NRkKD7"},
    1001: {title: "Moby Dick", author: "Herman Melville", ipfsId:"QmYZPCkHQwoo26NofBsCGiyNJFPbu1SjQaJwbWaWAuu4SU"},
    1002: {title: "Emma", author: "Jane Austen", ipfsId:"QmNdxQWPBvNuV5rSfg2Kptw2bUz4uFCvknmW8AQKTQEKr2"},
    1003: {title: "The Brother's Karamazov", author: "Fyodor Dostoyevky", ipfsId:"QmRqA5Jf5MkAzBpGpSj9npJYnkxnDwDVy8gKiqTw51qqBT"},
    1004: {title: "The Metamorphosis", author: "Franz Kafka", ipfsId:"QmQfCTQKThhiznaynvVT3vyJZoGUJckLsdcWRNMY78TxTw"}
}

router.get('/books', (req,res) => {
  console.log('Retrieving All Books')
  res.send(books)
})


router.get('/books/:bookId', (req, res) => {
  let idx = req.params.bookId
  let ipfsId = books[idx].ipfsId
  res.redirect('http://127.0.0.1:8080/ipfs/'+ ipfsId)
})

module.exports = router;

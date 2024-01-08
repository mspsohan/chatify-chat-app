
const express = require('express');
const { chats } = require('./data/data')

const app = express()

app.get("/", (req, res) => {
   res.send("Api is Running")
})

app.get("/api/chat", (req, res) => {
   res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
   const singleChat = chats.find((chat) => chat._id === req.params.id)
   res.send(singleChat)
})


const port = process.env.PORT || 5000

app.listen(port, () => {
   console.log(`Server running on port: ${port}`)
})
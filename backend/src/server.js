const express = require('express');
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.Server(app) // Pega servidor http e extrai de dentro do express
const io = socketio(server)


mongoose.connect('mongodb+srv://filipez:filipez@apirest-ta1cf.mongodb.net/omnistack9?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connectedUsers = {}

io.on('connection', socket =>{
   
    const { user_id } = socket.handshake.query
    connectedUsers[user_id] = socket.id
})

app.use((req,res,next)=>{
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})

app.use(cors())
app.use(express.json())
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')))
app.use(routes)

server.listen(3333)
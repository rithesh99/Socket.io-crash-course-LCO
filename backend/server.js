const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", (socket) => {
    console.log("Socket", socket);
    socket.on("chat", (payload) => {
        console.log("PAYLOAD", payload);
        io.emit("chat", payload);
    })
})

// app.listen(3000, () => console.log("Server is listening..."))

server.listen(5000, () => console.log("Server is listening..."))
import {Server} from "socket.io";
import {createServer} from "http";

const httpServer = createServer();
const io = new Server(httpServer, {cors : {origin : "http://localhost:3000"}});
let PORT = 5000 || process.env.PORT;
const room = "room1";
io.on("connection", (socket) => {
    console.log(`connection established succesfully and currently a ${socket.id} socket is connected..`);
    socket.join(room);
    
    socket.on("msg", (msg) => {
        console.log(`message from ${socket.id} ---->   \'${msg}\'`);
        socket.to(room).emit("otherMsg", msg);
    })
})

httpServer.listen(5000, () => {
    console.log(`Server listening on ${PORT}`);
})
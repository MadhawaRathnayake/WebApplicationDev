import { Server } from "socket.io"

const io = new Server({
    cors: {
        origin: "https://easycar-client.vercel.app",
    },
});

let onlineUsers = [];

const addUser = (userId, socketId) => {
    const userExcist = onlineUsers.find((user) => user.userId === userId);
    if (!userExcist) {
        onlineUsers.push({ userId, socketId })
    }
}

const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter(user => user.socketId !== socketId)
}

const getUser = (userId) => {
    return onlineUsers.find(user => user.userId === userId)
}

io.on("connection", (socket) => {

    socket.on("newUser", (userId) => {
        addUser(userId, socket.id);
        console.log(onlineUsers);
    });

    socket.on("sendMessage", ({ receiverId, data }) => {
        const receiver = getUser(receiverId)
        io.to(receiver.socketId).emit("getMessage", data);
    });

    socket.on("disconnect", () => {
        removeUser(socket.id);
    });
});

io.listen("4000");

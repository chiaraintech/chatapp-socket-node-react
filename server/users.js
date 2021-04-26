const users = [];

const addUser = ({ id, name, room}) => {
    //Change the name and room that are entered by the user.
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Checking for existing users.
    const existingUser = users.find((user) => user.room === room && user.name === name);

    if (existingUser) {
        return {error: "Username is taken."};
    }

    const user = { id, name, room }
    users.push(user);

    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id);

    if (index !== -1) {
        users.splice(index, 1)[0]                                   //It will remove our user from the users array.
    } 
}

const getUser = (id) => {
    users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    users.filter((user) => user.room === room)
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom};
const express = require('express');
const bodyparser = require('body-parser');

// get all data
const getAllUsers = async (req, res) => {
    const { User } = require('./models/user');
    const user = await User.find();
    res.send(user);
}

// insert data
const insertData = async (req, res) => {
    const { User } = require('./models/user');
    const user = await User.create(req.body);
    res.send(user);

}

// update data
const updateData = async (req, res) => {
    const { User } = require('./models/user');
    const user = await User.updateOne(req.body);
    res.send(user);
}
// delete a data
const deleteData = async (req, res) => {
    const { User } = require('./models/user');
    const user = await User.deleteOne(req.body);
    res.send(user);

}


async function startServer() {
    const app = express();
    app.use(bodyparser.json());
    app.listen(3000, error => {
        if (error) {
            console.log("error", error);
            process.exit(1);
        }
        console.log("server listening")
    });

    // call for different CRUD operations

    app.get('/users', getAllUsers);
    app.post('/users', insertData);
    app.put('/users', updateData);
    app.delete('/users', deleteData);

}

startServer();
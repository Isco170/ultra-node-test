const userModel = require('../models/user');


async function readUsers(request, response) {
    try {
        const users = await userModel.find({});

        if ((!users) || (users.length <= 0))
            return response.status(404).send({
                error: true,
                message: 'No users found',
                data: null
            });
        return response.status(202).send({
            error: false,
            message: 'Users list',
            data: users
        })
    } catch (error) {
        response.status(404).send({
            error: true,
            message: 'Error listing users',
            data: error
        })
    }
}

async function readOne(request, response) {
    const userName = request.params.name;

    if (!userName)
        return response.status(400).send({
            error: true,
            message: 'Type the name of the user',
            data: null
        })
    try {
        const user = await userModel.findOne({ name: userName });

        if (!user)
            return response.status(404).send({
                error: true,
                message: 'No user found',
                data: null
            })
        return response.status(202).send({
            error: false,
            message: 'User found',
            data: user
        });

    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Error searching user',
            data: error
        })
    }
}

async function deleteUser(request, response) {
    const { email } = request.body;
    if (!email)
        return response.status(400).send({
            error: true,
            message: 'Inform the users email',
            data: null
        })

    try {
        await userModel.findOneAndDelete({ email: email });
        return response.status(202).send({
            error: false,
            message: 'User deleted',
            data: null
        });
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Error deleting user',
            data: error
        });
    }
}

async function updateUser(request, response) {
    const { id, name, email, birthday, address } = request.body;

    let badRequest = false;
    let msg = [];

    if (!id) {
        badRequest = true,
            msg.push("Select the user to update info");
    }
    if (!name) {
        badRequest = true,
            msg.push("Name can't be empty");
    }
    if (!email) {
        badRequest = true,
            msg.push("Email can't be empty");
    }
    if (!birthday) {
        badRequest = true,
            msg.push("Birthday can't be empty");
    }
    if (!address) {
        badRequest = true,
            msg.push("Address can't be empty");
    }

    if (badRequest)
        return response.status(400).send({
            error: true,
            message: msg,
            data: null
        })

    try {
        await userModel.findByIdAndUpdate(id, { name: name, email: email, birthday: birthday, address: address });
        return response.status(202).send({
            error: false,
            message: 'User updated',
            data: null
        })
    } catch (error) {
        return response.status(404).send({
            error: true,
            message: 'Error updating user',
            data: error
        })
    }
}

module.exports = {
    readUsers,
    readOne,
    deleteUser,
    updateUser
}
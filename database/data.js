const axios = require('axios');
const userModel = require('../models/user');

async function getUser() {
    try {
        const response = await axios.get('https://randomuser.me/api/?results=50');
        return response.data.results;
        // console.log(response.data.results)
    } catch (error) {
        return false;
    }

}

async function bdLength() {
    const users = await userModel.find({});
    return users;
}

async function fillBD() {
    const usersLength = await bdLength();
    const users = await getUser();

    if (usersLength.length < 50) {
        for (let index = usersLength.length; index <= 50; index++) {
            try {
                const date = new Date(users[index].dob.date);
                const day = date.getDate();

                const user = new userModel({
                    name: users[index].name.title + ' ' + users[index].name.first + ' ' + users[index].name.last,
                    email: users[index].email,
                    birthday: day,
                    address: users[index].location.city
                });
                await user.save();
            } catch (error) {
                console.log("Error: ", error);
            }
        }
    }else{
        console.log("Tamanho");
    }





}



module.exports = {
    getUser,
    fillBD
}


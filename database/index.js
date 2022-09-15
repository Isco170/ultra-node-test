const mongoose = require('mongoose');
const data = require('./data');

const uri = "";

mongoose
    .connect(
        uri,
        {useNewUrlParser: true, useUnifiedTopology: true}
        )
    .then(() => {
        console.log("Connected to the database");
        data.fillBD();
        //  data.getUser();
    
    })
    .catch(( error) =>console.log("Could not connect to the database ", error));

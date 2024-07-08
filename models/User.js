const mongoose = require('mongoose')

const user = new mongoose.Schema({
    username : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true,
    },
    lastname : {
        type: String,
        required: true,
    },
    firstname : {
        type: String,
        required: true,
    },
    role: {
        type:String,
        required: true
    }
})

export default mongoose.model('user',user)
const mongoose = require('mongoose')

const vetirinaryReport = mongoose.Schama({
    date: {
        Type: Date,
        required: true,
    },
    detail : {
        type : String,
        required:true,
    },
    author: {
        type: String,
        required:true
    }
})
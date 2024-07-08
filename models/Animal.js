const mongoose = require('mongoose')

const animal = mongoose.Schema({
    habitat: {
        type: String,
        required: true,
    },
    race: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    vetReport: {
        type: String,
        required: true,
    },
})

export default mongoose.model('animal',animal)
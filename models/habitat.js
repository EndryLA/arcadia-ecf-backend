const mongoose = require('')

const habitat = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    commentaire: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },

})

export default mongoose.model('habitat',habitat)
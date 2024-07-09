import mongoose from 'mongoose'

const Habitat = new mongoose.Schema({
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

export default mongoose.model('Habitat',Habitat)
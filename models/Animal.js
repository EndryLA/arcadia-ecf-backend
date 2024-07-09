import mongoose from 'mongoose'

const Animal = new mongoose.Schema({
    habitatId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Habitat',
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
})

export default mongoose.model('Animal',Animal)
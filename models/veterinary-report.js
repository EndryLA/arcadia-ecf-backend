import mongoose from 'mongoose'
const VeterinaryReport = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    detail : {
        type : String,
        required:true,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    animalId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Animal',
        required:true,
    },
    
})

export default mongoose.model('VeterinaryReport',VeterinaryReport)
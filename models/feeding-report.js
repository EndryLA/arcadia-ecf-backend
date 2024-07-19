import mongoose from 'mongoose'

const FeedingReport = new mongoose.Schema({
    animalId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Animal',
        required:true,
    },
    date: {
        type:Date,
        required:true,
    },
    food: {
        type:String,
        required:true,
    },
    quantity: {
        type:String,
        required:true,
    }
})

export default mongoose.model('FeedingReport',FeedingReport)

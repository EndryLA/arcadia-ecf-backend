import mongoose from 'mongoose'
 
const Comment = new mongoose.Schema({
    pseudo: {
        type:String,
        required:true,
    },
    comment : {
        type: String,
        required:true,
    }
})

export default mongoose.model('Comment',Comment)
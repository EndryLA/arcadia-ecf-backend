import mongoose from 'mongoose'

const Image = new mongoose.Schema({
    filename: {
        type:String,
        required:true,
    },
    contentType: {
        type:String,
        required:true,
    }, 
    data: {
        type:Buffer,
        required:true,
    }
})

export default mongoose.model('Image',Image)
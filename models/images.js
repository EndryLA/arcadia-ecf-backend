import mongoose from 'mongoose'

const Image = new mongoose.Schema({
    filename: String,
    contentType: String,
    data: Buffer,
})

export default mongoose.model('Image',Image)
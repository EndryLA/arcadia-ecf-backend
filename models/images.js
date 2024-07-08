const mongoose = require ('mongoose')

const image = mongoose.Schema({
    filename: String,
    contentType: String,
    data: Buffer,
})

export default mongoose.model('image',image)
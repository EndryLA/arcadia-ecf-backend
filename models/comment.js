const mongoose = require('mongoose')
 
const comment = mongoose.Schema({
    pseudo: {
        name:String,
        required:true,
    },
    comment : {
        name: String,
        required:true,
    },
})

export default mongoose.model('comment',comment)
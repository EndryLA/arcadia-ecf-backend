mongoose = require('mongooe')

const service = mongoose.Schema({
    title : {
        type: String,
        required : true,
    },
    description : {
        type: String,
        required: true,
    }
})

export default mongoose.model('service',service)
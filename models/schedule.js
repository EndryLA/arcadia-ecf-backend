import mongoose from 'mongoose'

export const Schedule = mongoose.Schema({
    day:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    }
})

export default mongoose.model('Schedule',Schedule)
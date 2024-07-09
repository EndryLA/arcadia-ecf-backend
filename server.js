import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import animalRouter from './routes/animalRoutes.js'
import habitatRouter from './routes/habitatsRoutes.js'
import serviceRouter from './routes/serviceRoutes.js'
import commentRouter from './routes/commentRoutes.js'
import vetReportRouter from './routes/vetReportRoutes.js'
import userRouter from './routes/userRoutes.js'

dotenv.config()

console.log('MongoDB ID:', process.env.DB_USERNAME);
console.log('MongoDB Password:', process.env.DB_PASSWORD);
console.log('MongoDB Name:', process.env.DB_NAME);



const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.mongodb.net/?retryWrites=true&w=majority&appName=mern-test`, {
        }).then(() => console.log('connecté à la base données'))

    } catch (error) {
        console.log('connection error to DB', error)
        process.exit(1)
    }
}

connectDB()


const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/animals',animalRouter)
app.use('/api/habitats',habitatRouter)
app.use('/api/services',serviceRouter)
app.use('/api/comments',commentRouter)
app.use('/api/veterinary',vetReportRouter)
app.use('/api/users',userRouter)

app.listen(3000,() => {
    console.log('connected to app listen')
})
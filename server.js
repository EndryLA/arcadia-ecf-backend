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
import feedingReportRoutes from './routes/feedingReportRoutes.js'
import multer from 'multer'
import Image from './models/images.js'
import mailerRouter from './routes/mailerRoutes.js'
import scheduleRouter from './routes/scheduleRoutes.js'

dotenv.config()

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

// Cors options 
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
    
}



const app = express()

app.use(express.json())

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers',"Origin, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next()
});


/*  STORAGE CONTROL */

const storage = multer.memoryStorage()
const upload = multer({storage})


const generateUniqueFilename = (originalName) => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1E9);
    const extension = originalName.split('.').pop();
    return `${timestamp}-${randomNum}.${extension}`;
  };
  
app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        const { originalname, mimetype, buffer } = req.file;

        const newImage = new Image({
            filename: generateUniqueFilename(originalname),
            contentType: mimetype,
            data: buffer
        });

        await newImage.save();

        res.status(201).json({ Image : newImage});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/api/images/:filename', async (req, res) => {
    try {
        const filename = req.params.filename
        const image = await Image.find({filename: filename});
        res.status(200).json(image);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving images', error });
    }
});


app.get('/api/images/download/:filename', async (req,res) => {
    try {
        const image = await Image.findOne({ filename: req.params.filename });

        if (!image) {
            return res.status(404).json({ message: 'File not found' });
        }

        res.set('Content-Type', image.contentType); // Set content type based on image.contentType
        res.send(image.data);
      } catch (error) {
        res.status(500).json({ message: 'Error retrieving file', error });
      }
})











app.use('/api/schedule',scheduleRouter)
app.use('/api/contact',mailerRouter)
app.use('/api/users',userRouter)
app.use('/api/animals',animalRouter)
app.use('/api/habitats',habitatRouter)
app.use('/api/services',serviceRouter)
app.use('/api/comments',commentRouter)
app.use('/api/veterinary',vetReportRouter)
app.use('/api/feed',feedingReportRoutes)

app.listen(3000,() => {
    console.log('connected to app listen')
})
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import multer from 'multer';
import Image from '../models/images.js';

import mailerRouter from '../routes/mailerRoutes.js'
import scheduleRouter from '../routes/scheduleRoutes.js'
import animalRouter from '../routes/animalRoutes.js'
import habitatRouter from '../routes/habitatsRoutes.js'
import serviceRouter from '../routes/serviceRoutes.js'
import commentRouter from '../routes/commentRoutes.js'
import vetReportRouter from '../routes/vetReportRoutes.js'
import userRouter from '../routes/userRoutes.js'
import feedingReportRoutes from '../routes/feedingReportRoutes.js'



dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.mongodb.net/?retryWrites=true&w=majority&appName=mern-test`, {
        }).then(() => console.log('Connected to the database'));
    } catch (error) {
        console.log('Connection error to DB', error);
        process.exit(1);
    }
};

connectDB();

const app = express();
const storage = multer.memoryStorage();
const upload = multer({ storage });

const generateUniqueFilename = (originalName) => {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1E9);
    const extension = originalName.split('.').pop();
    return `${timestamp}-${randomNum}.${extension}`;
};

app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}));



app.get('/', (req, res) => res.send('route de test !'));
app.use('/api/schedule',scheduleRouter)
app.use('/api/contact',mailerRouter)
app.use('/api/users',userRouter)
app.use('/api/animals',animalRouter)
app.use('/api/habitats',habitatRouter)
app.use('/api/services',serviceRouter)
app.use('/api/comments',commentRouter)
app.use('/api/veterinary',vetReportRouter)
app.use('/api/feed',feedingReportRoutes)

app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        const { originalname, mimetype, buffer } = req.file;
        const newImage = new Image({
            filename: generateUniqueFilename(originalname),
            contentType: mimetype,
            data: buffer
        });
        await newImage.save();
        res.status(201).json({ Image: newImage });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/images/:filename', async (req, res) => {
    try {
        const filename = req.params.filename;
        const image = await Image.find({ filename: filename });
        res.status(200).json(image);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving images', error });
    }
});

app.get('/api/images/download/:filename', async (req, res) => {
    try {
        const image = await Image.findOne({ filename: req.params.filename });
        if (!image) {
            return res.status(404).json({ message: 'File not found' });
        }
        res.set('Content-Type', image.contentType);
        res.send(image.data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving file', error });
    }
});

app.listen(3000,() => {
    console.log('connecté au serveur express')
})

/* export default (req, res) => {
    return new Promise((resolve, reject) => {
        app(req, res, (err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}; */

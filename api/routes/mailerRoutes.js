import express from 'express'
import { sendMail } from '../api/controllers/mailer.controller.js'

const mailerRouter = express.Router()

mailerRouter.post('/send',sendMail)

export default mailerRouter
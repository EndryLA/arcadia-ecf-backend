import express from 'express'
import { createSchedule, getSchedule, updateSchedule } from '../controllers/schedule.controller.js'
import {authenticateAdmin} from '../middleware/authenticate.js'

const scheduleRouter = express.Router()

scheduleRouter.get('/:day',getSchedule)
scheduleRouter.put('/:day',authenticateAdmin,updateSchedule)
scheduleRouter.post('/',authenticateAdmin,createSchedule)

export default scheduleRouter
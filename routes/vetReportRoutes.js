import express from 'express'
import { getVetReports, getVetReport, deleteVetReport, updateVetReport, createVetReport } from '../../controllers/vetReport.controller.js'
import { authenticateVeterinary } from '../middleware/authenticate.js'
const vetReportRouter = express.Router()

vetReportRouter.get('/',getVetReports)
vetReportRouter.get('/:id',getVetReport)
vetReportRouter.put('/:id',authenticateVeterinary,updateVetReport)
vetReportRouter.delete('/:id',authenticateVeterinary,deleteVetReport)
vetReportRouter.post('/new',authenticateVeterinary, createVetReport)

export default vetReportRouter

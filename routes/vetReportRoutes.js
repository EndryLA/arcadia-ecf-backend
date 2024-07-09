import express from 'express'
import { getVetReports, getVetReport, deleteVetReport, updateVetReport, createVetReport } from '../controllers/vetReport.controller.js'

const vetReportRouter = express.Router()

vetReportRouter.get('/',getVetReports)
vetReportRouter.get('/:id',getVetReport)
vetReportRouter.put('/:id',updateVetReport)
vetReportRouter.delete('/:id',deleteVetReport)
vetReportRouter.post('/new',createVetReport)

export default vetReportRouter

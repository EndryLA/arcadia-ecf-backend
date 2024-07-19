import express from 'express'
import { getFeedingReport, getFeedingReports, deleteFeedingReport, updateFeedingReport, createFeedingReport } from "../controllers/feedingReport.controller.js";

const feedingReportRoutes = express.Router()

feedingReportRoutes.get('/',getFeedingReports)
feedingReportRoutes.get('/:id',getFeedingReport)
feedingReportRoutes.post('/new', createFeedingReport)
feedingReportRoutes.put('/:id',updateFeedingReport)
feedingReportRoutes.delete('/:id',deleteFeedingReport)

export default feedingReportRoutes


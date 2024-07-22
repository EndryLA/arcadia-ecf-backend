import express from 'express'
import { getFeedingReport, getFeedingReports, deleteFeedingReport, updateFeedingReport, createFeedingReport } from "../api/controllers/feedingReport.controller.js";
import { authenticateEmploye, authenticateAdmin } from '../api/middleware/authenticate.js';

const feedingReportRoutes = express.Router()

feedingReportRoutes.get('/',getFeedingReports)
feedingReportRoutes.get('/:id',getFeedingReport)
feedingReportRoutes.post('/new', authenticateEmploye,createFeedingReport)
feedingReportRoutes.put('/:id',authenticateAdmin,updateFeedingReport)
feedingReportRoutes.delete('/:id',authenticateAdmin,deleteFeedingReport)

export default feedingReportRoutes


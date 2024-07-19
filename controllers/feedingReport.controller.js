import FeedingReport from '../models/feeding-report.js'


export const getFeedingReports = async (req,res) => {
    try {
        const feedingReports = await FeedingReport.find()
        res.status(200).json(feedingReports)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const getFeedingReport = async (req,res) => {
    try {
        const id = req.params.id
        const feedingReport = await FeedingReport.findById(id)
        res.status(200).json({feedingReport})
    } catch(error) {
        res.status(500).json({message: error.message})
    }
}

export const createFeedingReport = async (req,res) => {
    try {
        const feedingReport = new FeedingReport(req.body)
        const newFeedingReport = await feedingReport.save()
        res.status(201).json({newFeedingReport})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateFeedingReport = async (req,res) => {
    try {
        const id = req.params.id
        const updatedFeedingReport = await FeedingReport.FindByIdAndUpdate(id,req.body)
        res.status(200).json(updatedFeedingReport)
    } catch(error) {
        res.status(500).json({message : error.message})
    }
}

export const deleteFeedingReport = async (req,res) => {
    try {
        const id = req.params.id
        const deletedHabitat = await FeedingReport.findByIdAndDelete(id)
        res.status(200).json({DeletedHabitat : deletedHabitat})
    } catch(error) {
        res.status(500).json({message : error.message})
    }
}

export default getFeedingReports
import VeterinaryReport from '../models/veterinary-report.js';

export const getVetReports = async (req, res) => {
    try {
        const vetReports = await VeterinaryReport.find();
        res.status(200).json(vetReports);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const getVetReport = async (req, res) => {
    try {
        const id = req.params.id;
        const vetReport = await VeterinaryReport.findById(id);
        res.status(200).json(vetReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const createVetReport = async (req, res) => {
    try {
        const vetReport = new VeterinaryReport(req.body);
        const createdVetReport = await vetReport.save();
        res.status(201).json(createdVetReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteVetReport = async (req, res) => {
    try {
        const id = req.params.id;
        const deletedVetReport = await VeterinaryReport.findByIdAndRemove(id);
        res.status(200).json(deletedVetReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const updateVetReport = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const updatedVetReport = await VeterinaryReport.findByIdAndUpdate(id, body);
        res.status(200).json(updatedVetReport);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default getVetReport;
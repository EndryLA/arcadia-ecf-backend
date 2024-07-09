import Service from '../models/service.js'

export const getServices = async (req,res) => {
    try {
        const services = await Service.find()
        res.status(200).json(services)     
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}  

export const getService = async (req,res) => {
    try {
        const id =  req.params.id
        const service = await Service.findById(id)
        res.status(200).json({service})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createService = async (req,res) => {
    try {
        const service = new Service(req.body)
        const createdService = await service.save()
        res.status(201).json(createdService)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteService = async (req,res) => {
    try {
        const id = req.params.id
        const deletedService = await Service.findByIdAndRemove(id)
        res.status(200).json(deletedService)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateService = async (req,res) => {
    try {
        const id = req.params.id
        const body = req.body
        const updatedService = await Service.findByIdAndUpdate(id,body)
        res.status(200).json(updatedService)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
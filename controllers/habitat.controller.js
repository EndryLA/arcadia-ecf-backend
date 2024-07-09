import express from 'express';
import Habitat from '../models/habitat.js'

const habitatsRouter = express.Router();

export const getHabitats = async (req,res) => {
    try {
        const habitats = await Habitat.find()
        res.status(200).json(habitats)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const getHabitat = async (req,res) => {
    try {
        const id = req.params.id
        const habitat = await Habitat.findOne(id)
        res.status(200).json(habitat)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createHabitat = async (req,res) => {
    try {
        const habitat = new animal(req.body)
        const savedHabitat = await Habitat.save(habitat)
        res.status(201).json(habitat)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateHabitat = async (req,res) => {
    try {
        const id = req.params.id
        const updatedHabitat = await Habitat.findByIdAndUpdate(id)
        res.status(200).json(updateHabitat)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const deleteHabitat = async (req,res) => {
    try {
        const id = req.params.id
        const deletedHabitat = await Habitat.findByIdAndDelete(id)
        res.status(200).json(deletedHabitat)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export default getHabitats
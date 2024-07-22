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
        const habitat = await Habitat.findById(id)
        res.status(200).json(habitat)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

/* export const createHabitat =
[body('name').isString().trim().escape(),
body('description').isString().trim().escape(),
body('commentaire').isString().trim().escape(),
body('image').isString().trim().escape(),
validate,
async (req,res) => {
    console.log(req.body)
    try {
        const habitat = new Habitat(req.body)
        const savedHabitat = await habitat.save()
        res.status(201).json(savedHabitat)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
] */

 export const createHabitat = async (req,res) => {
    console.log(req.body)
    try {
        const habitat = new Habitat(req.body)
        const savedHabitat = await habitat.save()
        res.status(201).json(savedHabitat)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
} 

export const updateHabitat = async (req,res) => {
    try {
        const id = req.params.id
        const updatedHabitat = await Habitat.findByIdAndUpdate(id,req.body)
        res.status(200).json(updatedHabitat)
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
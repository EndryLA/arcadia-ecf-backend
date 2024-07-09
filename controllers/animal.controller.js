import Animal from "../models/animal.js";

export const getAnimals = async (req,res) => {
    try {
        const animals = await Animal.find()
        res.status(200).json(animals)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getAnimal = async (req,res) => {
    try {
        const animal = await Animal.findById(req.params.id)
        res.status(200).json(animal)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createAnimal = async (req,res) => {
    try {
        const animal = new Animal(req.body)   
        const savedAnimal = await animal.save()
        res.status(201).json(savedAnimal)
    } catch (error) {
        res.status(400).json({message :error.message})
    }
}

export const updateAnimal = async (req,res) => {
    try {
        const id = req.params.id
        const updatedAnimal = await Animal.findByIdAndUpdate(id)
        res.status(201).json(updatedAnimal)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const deleteAnimal = async (req,res) => {
    try {
        const id = req.params.id
        const deletedItem = await Animal.findByIdAndRemove(id)   
        res.status(201).json(deletedItem)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export default getAnimals

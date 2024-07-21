import Animal from "../models/Animal.js";

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
        console.log(req.body)
        const updatedAnimal = await Animal.findByIdAndUpdate(id,req.body)
        res.status(200).json(updatedAnimal)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const deleteAnimal = async (req,res) => {
    try {
        const id = req.params.id
        const deletedItem = await Animal.findByIdAndDelete(id)   
        res.status(201).json(deletedItem)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const incrementVisit = async (req, res) => {
    try {
        const id = req.params.id;
        const animal = await Animal.findById(id);
        
        if (!animal) {
            return res.status(404).json({ error: 'Animal not found' });
        }

        const visits = parseInt(animal.visits, 10);
        animal.visits = isNaN(visits) ? 1 : visits + 1;
        
        const updatedAnimal = await animal.save();
        
        res.status(200).json({ updatedAnimal });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export default getAnimals

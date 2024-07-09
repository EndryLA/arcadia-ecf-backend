import express from "express"
import {getAnimal, getAnimals, createAnimal, updateAnimal, deleteAnimal} from '../controllers/animal.controller.js'

const animalRouter = express.Router()

animalRouter.get('/',getAnimals)
animalRouter.get('/:id',getAnimal)
animalRouter.post('/new',createAnimal)
animalRouter.put('/:id',updateAnimal)
animalRouter.delete('/:id',deleteAnimal)

export default animalRouter
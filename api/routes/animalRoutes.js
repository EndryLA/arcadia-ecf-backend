import express from "express"
import {getAnimal, getAnimals, createAnimal, updateAnimal, deleteAnimal, incrementVisit} from '../api/controllers/animal.controller.js'
import authenticate, { authenticateAdmin } from "../api/middleware/authenticate.js"
const animalRouter = express.Router()

animalRouter.get('/',getAnimals)
animalRouter.get('/:id',getAnimal)
animalRouter.post('/new',authenticateAdmin, createAnimal)
animalRouter.put('/:id',authenticateAdmin, updateAnimal)
animalRouter.delete('/:id',authenticateAdmin, deleteAnimal)
animalRouter.post('/visit/:id', incrementVisit)

export default animalRouter
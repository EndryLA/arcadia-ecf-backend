import express from 'express'
import {getHabitats, getHabitat, deleteHabitat, updateHabitat, createHabitat } from '../controllers/habitat.controller.js'

const habitatRouter = express.Router()

habitatRouter.get('/',getHabitats)
habitatRouter.get('/:id',getHabitat)
habitatRouter.post('/new',createHabitat)
habitatRouter.put('/:id',updateHabitat)
habitatRouter.delete('/:id',deleteHabitat)

export default habitatRouter
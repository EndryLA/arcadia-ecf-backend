import express from 'express'
import {getHabitats, getHabitat, deleteHabitat, updateHabitat, createHabitat } from '../controllers/habitat.controller.js'
import { authenticateAdmin } from '../middleware/authenticate.js'

const habitatRouter = express.Router()

habitatRouter.get('/',getHabitats)
habitatRouter.get('/:id',getHabitat)
habitatRouter.post('/new',authenticateAdmin, createHabitat)
habitatRouter.put('/:id', authenticateAdmin, updateHabitat)
habitatRouter.delete('/:id',authenticateAdmin, deleteHabitat)

export default habitatRouter
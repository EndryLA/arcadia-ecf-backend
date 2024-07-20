import express from 'express'
import {getServices, getService, createService, updateService, deleteService} from '../controllers/service.controller.js'
import service from '../models/service.js'
import { authenticateMultipleRoles } from '../middleware/authenticate.js'

const serviceRouter = express.Router()

serviceRouter.get('/',getServices)
serviceRouter.get('/:id',getService)
serviceRouter.post('/new', authenticateMultipleRoles, createService)
serviceRouter.delete('/:id',authenticateMultipleRoles,deleteService)
serviceRouter.put('/:id',authenticateMultipleRoles, updateService)

export default serviceRouter

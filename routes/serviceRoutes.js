import express from 'express'
import {getServices, getService, createService, updateService, deleteService} from '../controllers/service.controller.js'
import service from '../models/service.js'

const serviceRouter = express.Router()

serviceRouter.get('/',getServices)
serviceRouter.get('/:id',getService)
serviceRouter.post('/new',createService)
serviceRouter.delete('/:id',deleteService)
serviceRouter.put('/:id',updateService)

export default serviceRouter

import express from 'express'
import {getUsers, getUser, deleteUser, updateUser, createUser, loginUser} from '../controllers/user.controller.js'
import authenticate, { authenticateAdmin } from '../middleware/authenticate.js'

const userRouter = express.Router()

userRouter.post('/auth', loginUser)
userRouter.post('/new' ,authenticateAdmin, createUser)
userRouter.delete('/:id',authenticateAdmin, deleteUser)
userRouter.put('/:id', authenticateAdmin,updateUser)
userRouter.get('/', authenticateAdmin,getUsers)
userRouter.get('/:id',authenticateAdmin, getUser)

export default userRouter
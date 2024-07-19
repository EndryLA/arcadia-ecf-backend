import express from 'express'
import {getUsers, getUser, deleteUser, updateUser, createUser, loginUser} from '../controllers/user.controller.js'
import authenticate from '../middleware/authenticate.js'

const userRouter = express.Router()

userRouter.post('/auth', loginUser)
userRouter.post('/new' ,authenticate, createUser)
userRouter.delete('/:id',authenticate, deleteUser)
userRouter.put('/:id', authenticate,updateUser)
userRouter.get('/', authenticate,getUsers)
userRouter.get('/:id',authenticate, getUser)

export default userRouter
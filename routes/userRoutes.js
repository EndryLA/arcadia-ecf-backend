import express from 'express'
import {getUsers, getUser, deleteUser, updateUser, createUser} from '../controllers/user.controller.js'

const userRouter = express.Router()


userRouter.get('/',getUsers)
userRouter.get('/:id',getUser)
userRouter.post('/new',createUser)
userRouter.delete('/:id',deleteUser)
userRouter.put('/:id',updateUser)

export default userRouter
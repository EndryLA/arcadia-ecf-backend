import express from 'express'
import { getComment, getComments,deleteComment, updateComment, createComment } from '../api/controllers/comment.controller.js'
import { authenticateEmploye } from '../api/middleware/authenticate.js'

const commentRouter = express.Router()


commentRouter.put('/:id',authenticateEmploye,updateComment)
commentRouter.get('/',getComments)
commentRouter.get('/:id',getComment)
commentRouter.delete('/:id',deleteComment)
commentRouter.post('/new',createComment)

export default commentRouter
import express from 'express'
import { getComment, getComments,deleteComment, updateComment, createComment } from '../controllers/comment.controller.js'

const commentRouter = express.Router()


commentRouter.get('/',getComments)
commentRouter.get('/:id',getComment)
commentRouter.delete('/:id',deleteComment)
commentRouter.put('/:id',updateComment)
commentRouter.post('/new',createComment)

export default commentRouter
import Comment from '../models/comment.js'

export const getComments = async (req,res) => {
    try {
        const comments = await Comment.find()
        res.status(200).json(comments)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const getComment = async (req,res) => {
    try {
        const id = req.params.id
        const comment = await Comment.findById(id)
        res.status(200).json(comment)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteComment = async (req,res) => {
    try {
        const id = req.params.id
        const deletedComment = await Comment.findByIdAndDelete(id)
        res.status(200).json(deletedComment)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateComment = async (req,res) => {
    try {
        const id = req.params.id
        const body = req.body
        const updatedComment = await Comment.findByIdAndUpdate(id,body)
        res.status(200).json(updatedComment)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createComment = async (req,res) => {
    try {
        const comment = new Comment(req.body)
        const createdComment = await comment.save()
        res.status(201).json(createdComment)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export default getComments
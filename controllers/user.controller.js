import User from '../models/user.js'

export const getUsers = async (req,res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const getUser = async (req,res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const createUser = async (req,res) => {
    try {
        const user = new User(req.body)
        const createdUser = await user.save()
        res.status(201).json(createdUser)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const deleteUser = async (req,res) => {
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndRemove(id)
        res.status(200).json(deletedUser)
    } catch (error) {
        res.status(500).json({message : error.message})
    }
}

export const updateUser = async (req,res) => {
    try {
        const id = req.params.id
        const body = req.body
        const updatedUser = await User.findByIdAndUpdate(id,body)
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export default getUser
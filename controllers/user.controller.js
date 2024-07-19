import User from '../models/User.js'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()
const saltRounds = 10

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
        const hashedPassword = await bcrypt.hash(req.body.password,saltRounds)
        const user = new User({
            username:req.body.username,
            password: hashedPassword,
            lastname:req.body.lastname,
            firstname:req.body.firstname,
            role:req.body.role
        })
        console.log(user)
        const createdUser = await user.save()
        res.status(201).json(createdUser)
    } catch (error) {
        console.log('catch block error',error)
        res.status(500).json({message : error.message})
    }
}


export const deleteUser = async (req,res) => {
    try {
        const id = req.params.id
        const deletedUser = await User.findByIdAndDelete(id)
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

export const loginUser = async (req,res,next) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const user = await User.findOne({email})
        console.log(user)

        if (!user) {
           console.error('error point 1')
           return res.status(401).json({message: 'Adresse mail ou mot de passe invalide'})
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            console.error('error point 2')
            return res.status(401).json({message: 'Adresse mail ou mot de passe invalide'})
            
        }

        const token = jwt.sign(
            {userId : user._id},    
            process.env.AUTH_TOKEN,
            {expiresIn: '24h'},
        )
        res.status(200).json({userId:user._id, firstname:user.firstname, lastname:user.lastname, role:user.role,token: token})
    } catch (error) {
        res.status(500).json({message: error.message})
        console.error('error point 3')

    }
}

export default getUser
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authenticate = (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        res.status(401).json({message : 'Accès refusé'})
        next()
    }
    try {
        const decoded = jwt.verify(token, process.env.AUTH_TOKEN)
        req.user = decoded;
        next()
    } catch (error) {
        res.status(500).json({error})
    }
}

export default authenticate
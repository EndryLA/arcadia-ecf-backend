import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const authenticate = (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1]

    if (!token) {
        res.status(401).json({message : 'Accès refusé'})
    }
    try {
        const decoded = jwt.verify(token, process.env.AUTH_TOKEN)
        console.log(decoded)
        req.user = decoded;
        next()
    } catch (error) {
        res.status(500).json({error})
    }
}

const roleAuthorization = (roles) => {
    return (req, res, next) => {       
        console.log('token :',req.headers.authorization)
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Accès refusé' });
        }

        try {
            const decoded = jwt.verify(token, process.env.AUTH_TOKEN);
            if (!roles.includes(decoded.userRole)) {
                return res.status(401).json({ message: 'Accès refusé' });
            }
            req.user = decoded;
            next();
        } catch (error) {
            return res.status(500).json({ message: 'Erreur d\'authentification', error });
        }
    };
};

export const authenticateAdmin = roleAuthorization(['admin']);
export const authenticateEmploye = roleAuthorization(['employe']);
export const authenticateVeterinary = roleAuthorization(['veterinary']);
export const authenticateMultipleRoles = roleAuthorization(['admin', 'employe']);

export default authenticate
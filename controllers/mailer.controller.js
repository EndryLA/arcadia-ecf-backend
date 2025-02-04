import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()


export const sendMail = (req,res) => {
    const {firstname, lastname, email, message} = req.body
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:process.env.EMAIL_USER,
            pass:process.env.EMAIL_PASSWORD
        }
    })

    const mailOptions = {
        from:process.env.EMAIL_USER,
        to:email,
        subject:`Contact Zoo Arcadia - ${firstname} ${lastname}`,
        text:message
    }
    try {

        transporter.sendMail(mailOptions,(error, info) => {
            if (error) {
                res.status(500).json({error})
            } else {
                res.status(200).json({info})
            }
        })

    } catch(error) {
        res.status(500).json(error)
    }
}

export default sendMail
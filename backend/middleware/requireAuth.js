import jwt from 'jsonwebtoken'
import User from '../models/User.js'

const requireAuth = async(req, res, next) => {
    //verify authentication middleware
    const {authorization} = req.headers
    
    if(!authorization){
        return res.status(401).json({error:'Authorization token required'})
    }

    //token: 'Bearer gjsnksjf..'

    const token=authorization.split(' ')[1]

    try {
        const {_id}=jwt.verify(token, process.env.JWT_SECRET)
        
        req.user= await User.findOne({_id}).select('_id')
        next()
    } 
    catch (error) {
        console.log(error.message)
        res.status(401).json({error:'Request not authorized'})    
    }
}
export default requireAuth
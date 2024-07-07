import User from '../models/User.js'
import jwt from 'jsonwebtoken'


const createToken = (_id) => {
    return jwt.sign({ _id}, process.env.JWT_SECRET, {expiresIn: '3d'})

}

//login user
const loginUser = async(req, res) => {
    const {email,password}=req.body
    try {
        const user=await User.login(email,password)
        const token=createToken(user._id)
        res.status(200).json({token,"username":user.username,"email":user.email})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


//signup user
const signupUser = async (req, res)=>{ 
    const {username,email,password,cpass}=req.body
    
    try {
        const user=await User.signup(username,email,password,cpass)
        const token=createToken(user._id)
        res.status(200).json({token,"username":user.username,"email":user.email})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error:error.message})
    } 
}

//verify user token
const verifyUser = async(req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    res.json({ token, "username": user.username, "email": user.email });
  } 
  catch (error) {
    res.status(401).json({ message: 'Token verification failed' });
  }
}

export {loginUser, signupUser, verifyUser}

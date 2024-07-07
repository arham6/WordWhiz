import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import validator from 'validator'
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true   //<--writing this creates an index of email in mongodb
  },
  password: {
    type: String,
    required: true,
  }
  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
},{ versionKey: false });

//static signup method
UserSchema.statics.signup = async function(username, email, password,cpass){

  //validation
  if(!email || !username || !password || !cpass){
    throw new Error("All fields are required")
  }
  
  if(!validator.isEmail(email)){
    throw new Error("Invalid email")
  }
  if(username.length<5){
    throw new Error("Username must be at least 5 characters")
  }
  

  // Check if email or username already exist in database
  //console.log(email,username,password)
  const existingUser =await this.findOne({ $or: [{ email }, { username }] })
  if (existingUser) {
    if (existingUser.email === email) {
      throw new Error("Email already exists");
    } 
    else {
      throw new Error("Username already exists");
    }
  }
  if(password!==cpass){
    throw new Error("Passwords do not match")
  }
  if(!validator.isStrongPassword(password)){
    throw new Error("Password must contain at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol")
  }

  const salt=await bcrypt.genSalt(10)
  const hash=await bcrypt.hash(password,salt)

  const user=await this.create({username, email, password:hash})

  return user
}


// static login method
UserSchema.statics.login = async function(email, password) {
  // validation
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  // Check if the user exists in the database
  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Following email does not exist");
  }

  // Compare the provided password with the hashed password in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid password entered");
  }

  return user;
}


const User = mongoose.model("user", UserSchema);

export default User

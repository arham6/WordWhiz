import connectToMongo from './util/db.js'
import express from 'express'
import cors from 'cors'
import env from 'dotenv'
import wordRouter from './routes/word.js'
import userRouter from './routes/user.js'
env.config()

const app=express()
const port=process.env.PORT || 5000


connectToMongo()

app.use(cors())
//middleware to use req.body
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/word',wordRouter)
app.use('/auth',userRouter)
//app.use('/api/notes',require('./routes/notes'))


app.listen(port,()=>{
    console.log(`Wordle backend at port ${process.env.PORT}`)
})









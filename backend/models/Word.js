import mongoose from "mongoose"

const WordsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    meaning:{
        type:String,
        required:true
    },
    hint:{
        type:String,
        required:true
    }
}, { versionKey: false })

const Word=mongoose.model('word',WordsSchema)

export default Word